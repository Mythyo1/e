const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let shota = await client.lolislife.getSFWShota();
    
    let embed = new Discord.RichEmbed()
    .setTitle('Shota')
    .setImage(shota.url)
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
  name: 'shota',
  category: 'Weeb',
  description: 'Returns a SFW Shota',
  usage: 'shota'
};