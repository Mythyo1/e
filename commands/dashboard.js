const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let embed = new client.Embed('normal', {
      title: 'Cytrus Dashboard',
      url: 'https://app.cytrus.ga',
      description: 'Web Dashboard: https://app.cytrus.ga'
    });

    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['dash', 'webdash'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'dashboard',
  category: 'General',
  description: 'Returns the web dashboard',
  usage: 'dashboard'
};
