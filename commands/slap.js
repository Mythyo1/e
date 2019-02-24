const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!message.mentions.members.first()) return message.reply('You need to mention the user to slap!');
    
    let slap = await client.nekoslife.sfw.slap();
    
    let embed = new Discord.RichEmbed()
    .setTitle(message.author.username + ' slapped ' + message.mentions.members.first().user.username)
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
  usage: 'slap <user>'
};
