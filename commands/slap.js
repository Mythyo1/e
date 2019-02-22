const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let slap = await client.nekoslife.sfw.slap();
    
    let embed = new Discord.RichEmbed()
    .setTitle('Slap')
    .setImage(slap.url)
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
  name: 'slap',
  category: 'Weeb',
  description: 'Returns a slap',
  usage: 'slap'
};
