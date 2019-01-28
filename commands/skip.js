const Discord = require('discord.js');
const ytdl = require('ytdl-core');


exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars  
  var server = client.music[message.guild.id];
  server.dispatcher.emit('end');
  message.channel.send('Song Skipped!');
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'skip',
  category: 'Music',
  description: 'Skips a song',
  usage: 'skip'
};
