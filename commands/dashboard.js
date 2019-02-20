const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let embed = new Discord.RichEmbed()
    .setTitle('Dashboard')
    .setURL('https://app.cytrus.ga')
    .setDescription('Web Dashboard: https://app.cytrus.ga')
    .setColor('#eeeeee');

    message.channel.send(embed);
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
  name: 'ping',
  category: 'General',
  description: 'Returns CytrusBot\'s ping',
  usage: 'ping'
};
