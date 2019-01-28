const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  var server = client.music[message.guild.id];
  message.reply(`Time listened: ${Math.floor(server.dispatcher.time / 60000)}:${Math.floor((server.dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((server.dispatcher.time % 60000)/1000) : Math.floor((server.dispatcher.time % 60000)/1000)}`); 
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'time',
  category: 'Music',
  description: 'Returns the song\'s time',
  usage: 'time'
};
