const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    client.fetchApplication('@me').then(app => {
      let embed = new Discord.RichEmbed()
      .setTitle(app.name)
      .setThumbnail(app.iconURL)
      .addField('ID', app.id, true)
      .addField('Public', app.botPublic, true)
      .addField('Created At', app.createdAt)
      .addField('Owner', app.owner.tag)
      .setDescription(app.description)
      .setColor('#363942');

      message.channel.send(embed);
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['app'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'application',
  category: 'General',
  description: 'Returns a Cytrus\'s OAuth2 application',
  usage: 'application'
};
