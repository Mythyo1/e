const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars 
  try {
    var server = client.musicqueue[message.guild.id];
    server.dispatcher.pause().then(message.channel.send('Song paused!'));
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'Moderator'
};

exports.help = {
  name: 'pause',
  category: 'Music',
  description: 'Pause\'s a song',
  usage: 'pause'
};
