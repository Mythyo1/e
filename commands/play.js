const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const Play = (connection, message, client) => {
  const server = client.music[message.guild.id];
  let audioStream;
    
  if (server.queue[0]) {
    audioStream = ytdl(server.queue[0], {format: 'audioonly'});
    
    server.dispatcher = connection.playStream(audioStream, {passes: 7});
    server.queue.shift();
  } else {
    return message.channel.send('There is no music in the queue!');
  }
    
  server.dispatcher.on('end', () => {
    if (server.queue[0]) {
      Play(connection, message, client);
    } else {
      connection.disconnect().catch(message.reply('Their was an error!'));
      server.dispatcher = null;
    }
  });
};

exports.run = async (client, message, args, level) => {
  
  if (message.member.voiceChannel) {
    if (!message.guild.voiceConnection) {
      message.member.voiceChannel.join().catch(message.reply('Their was an error!'));
    }
    
    Play(message.guild.voiceConnection, message, client);
    message.channel.send('Playing the queue!');
  } else {
    message.reply('You need to join a voice channel first!');
  }
};

exports.conf = {
  enabled: true,
  aliases: ['p'],
  permLevel: 'User'
};

exports.help = {
  name: 'play',
  category: 'Music',
  description: 'Plays the server\'s queue in your voice channel',
  usage: 'play'
};
