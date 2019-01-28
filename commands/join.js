const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const Play = (connection, message, client) => {
  const server = client.music[message.guild.id];
  let queue = server.queue;
  let audioStream;
    
  if (queue[0]) {
    audioStream = ytdl(queue[0], {format: 'audioonly'});
    
    server.dispatcher = connection.playStream(audioStream, {passes: 7});
    queue.shift();
  } else {
    return message.channel.send('There is no music in the queue!');
  }
    
  server.dispatcher.on('end', () => {
    if (queue[0]) {
      Play(connection, message, client);
    } else {
      connection.disconnect();
      server.dispatcher = null;
    }
  });
};

exports.run = async (client, message, args, level) => {
  if (message.member.voiceChannel) {
    if (!message.guild.voiceConnection) {
      message.member.voiceChannel.join().then(message.channel.send('Ive joined the voice channel!')).catch(message.reply('Their was an error!'));
    } else {
      message.reply('Im already in a voice channel!');
    }
  } else {
    message.reply('You need to join a voice channel first!');
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'join',
  category: 'Music',
  description: 'Joins your voice channel',
  usage: 'join'
};