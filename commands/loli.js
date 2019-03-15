const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let loli = await client.lolislife.getSFWLoli();
    
    let embed = new Discord.RichEmbed()
    .setTitle('Loli')
    .setImage(loli.url)
    .setColor('#363942');

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
  name: 'loli',
  category: 'Weeb',
  description: 'Returns a SFW Loli',
  usage: 'loli'
};