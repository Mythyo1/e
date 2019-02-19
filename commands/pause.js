const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars 
  try {
    var server = client.music[message.guild.id];
    if (server) {
      if (server.dispatcher) { 
        server.dispatcher.pause();
        message.channel.send('Song paused!');
      } else message.channel.send('There is nothing playing!');
    } else message.channel.send('There is nothing playing!');
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
