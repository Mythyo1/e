const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars  
  var server = client.musicqueue[message.guild.id];
  server.dispatcher.pause().then(message.channel.send('Song paused!')).catch(message.channel.send('Their was an error!'));
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'pause',
  category: 'Music',
  description: 'Pause\'s a song',
  usage: 'pause'
};
