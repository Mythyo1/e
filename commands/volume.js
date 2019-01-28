const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  var server = client.music[message.guild.id];
  if (args[0] && Number(args[0]) <= 150 && Number(args[0]) > 0) {
    server.dispatcher.setVolume(Number(args[0])).catch(message.channel.send('There was an error!'));
  } else {
    message.reply('You must give me a number between 1 and 150!');
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'volume',
  category: 'Music',
  description: 'Changes the volume',
  usage: 'volume <1-150>'
};
