const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    message.channel.send(new Discord.Attachment('https://cdn.discordapp.com/attachments/502236124308307968/556413748416479242/images16.gif'));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'gamergirl',
  category: 'Fun',
  description: 'Gamer girls',
  usage: 'gamergirl'
};
