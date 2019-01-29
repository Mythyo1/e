const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const Play = (connection, message, client) => {
  try {
    const server = client.music[message.guild.id];
    let audioStream;
    if (server) {
      if (server.queue[0]) {
        audioStream = ytdl(server.queue[0], {format: 'audioonly'});

        server.dispatcher = connection.playStream(audioStream, {passes: 7});
        server.queue.shift();
      } else {
        return message.channel.send('There is no music in the queue!');
      }
    } else {
      message.reply('You have to add music to the queue first! (Use '+client.getSettings(message.guild.id) || client.config.defaultSettings+'add to add music)');
    }

    server.dispatcher.on('end', () => {
      if (server.queue[0]) {
        Play(connection, message, client);
      } else {
        connection.disconnect();
        server.dispatcher = null;
      }
    });
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.run = async (client, message, args, level) => {
  try {
  if (message.member.voiceChannel) {
    if (!message.guild.voiceConnection) {
      message.member.voiceChannel.join().catch(message.reply('Their was an error!'));
    }
    
    Play(message.guild.voiceConnection, message, client);
    message.channel.send('Playing the queue!');
  } else {
    message.reply('You need to join a voice channel first!');
  }
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['p'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'play',
  category: 'Music',
  description: 'Plays the server\'s queue in your voice channel',
  usage: 'play'
};
