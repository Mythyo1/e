const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    const embed = new Discord.RichEmbed()
    .setColor('#eeeeee')
    .setTitle('Cytrus Github')
    .setFooter('Made by CelestialCrafter#0770 and EnderGirlGamer#5370')
    .setDescription('Production: [Production Github](https://github.com/CelestialCrafter/cytrus) \n Website: [Website](https://cytrus.ga) \n API: [API](https://cytrusbot.glitch.me)\n Issues: [Github](https://github.com/CelestialCrafter/cytrus/issues)');

    message.channel.send(embed);
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['i'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'info',
  category: 'General',
  description: 'Returns info about Cytrus',
  usage: 'info'
};
