const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let cuddle = await client.nekoslife.sfw.cuddle();
    
    let embed = new Discord.RichEmbed()
    .setTitle('Cuddle')
    .setImage(cuddle.url)
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
  name: 'cuddle',
  category: 'Weeb',
  description: 'Returns a cuddle',
  usage: 'cuddle'
};
