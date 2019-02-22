const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let baka = await client.nekoslife.sfw.baka();
    
    let embed = new Discord.RichEmbed()
    .setTitle('Baka')
    .setImage(baka.url)
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
  name: 'baka',
  category: 'Weeb',
  description: 'Returns a baka',
  usage: 'baka'
};
