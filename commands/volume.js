const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    var server = client.music[message.guild.id];
    if (args[0] && Number(args[0]) <= 150 && Number(args[0]) > 0) {
      if (server) {
        if (server.dispatcher) {
          server.dispatcher.setVolume(Number(args[0]));
          message.reply('The volume is at ' + server.dispatcher.volume);
        } else message.channel.send('There is nothing playing in the server!');
      }
    } else {
      message.reply('You must give me a number between 1 and 150!');
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'Moderator'
};

exports.help = {
  name: 'volume',
  category: 'Music',
  description: 'Changes the volume',
  usage: 'volume <1-150>'
};
