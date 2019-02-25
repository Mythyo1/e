const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!message.channel.nsfw) return message.reply('You need to be in a channel marked as NSFW');

    let neko = await client.nekoslife.nsfw.nekoGif();
    let embed = new Discord.RichEmbed()
    .setTitle('Neko')
    .setImage(neko.url)
    .setColor('#eeeeee');

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
  name: 'neko',
  category: 'NSFW',
  description: 'Returns a neko',
  usage: 'neko'
};
