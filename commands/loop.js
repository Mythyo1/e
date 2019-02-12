const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!client.music[message.guild.id]) {
      client.music[message.guild.id] = {queue: [], loop: true};
    }

    var server = client.music[message.guild.id];
    
    if (server.loop == true) server.loop = false;
    if (server.loop == false) server.loop = true;
    
    message.channel.send('Loop Toggled!');
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
  name: 'loop',
  category: 'Music',
  description: 'Loops the server\'s queue',
  usage: 'loop'
};
