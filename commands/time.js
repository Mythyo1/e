const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    var server = client.music[message.guild.id];
    if (server) if (server.dispatcher) {
      message.reply(`Time listened: ${Math.floor(server.dispatcher.time / 60000)}:${Math.floor((server.dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((server.dispatcher.time % 60000)/1000) : Math.floor((server.dispatcher.time % 60000)/1000)}`);
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'time',
  category: 'Music',
  description: 'Returns the song\'s time',
  usage: 'time'
};
