const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const embed = new Discord.RichEmbed()
  .setColor('#eeeeee')
  .setTitle('Cytrus Github')
  .setFooter('Made by CelestialCrafter#0001 and EnderGirlGamer#5370')
  .setDescription('Production: [Production Github](https://github.com/CelestialCrafter/cytrus) \n Development: [Development Github](https://github.com/CelestialCrafter/cytrus-dev)');

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['git'],
  permLevel: 'User'
};

exports.help = {
  name: 'github',
  category: 'General',
  description: 'Returns the Cytrus Github',
  usage: 'github'
};
