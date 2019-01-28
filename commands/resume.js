const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars  
  var server = client.music[message.guild.id];
  server.dispatcher.resume().then(message.channel.send('Song resumed!')).catch(message.channel.send('Their was an error!'));
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'resume',
  category: 'Music',
  description: 'Resume\'s a song',
  usage: 'resume'
};
