const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  
  if (!client.music[message.guild.id]) {
    client.music[message.guild.id] = {queue: []};
  }
  
  var server = client.music[message.guild.id];
      
  if(ytdl.validateURL(args[0])) {
    server.queue.push(args[0]);
    message.channel.send('The song is in the queue!');
  } else {
    message.reply('Thats not a valid YouTube link!');
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'add',
  category: 'Music',
  description: 'Adds a song to the server\'s queue',
  usage: 'add <youtube video URL>'
};
