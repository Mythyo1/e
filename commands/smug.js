const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let smug = await client.nekoslife.sfw.smug();
    
    let embed = new Discord.RichEmbed()
    .setTitle('Smug')
    .setImage(smug.url)
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
  name: 'smug',
  category: 'Weeb',
  description: 'Returns a smug',
  usage: 'smug'
};
