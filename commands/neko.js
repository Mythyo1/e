const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
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
  permLevel: 'User',
  nsfw: true
};

exports.help = {
  name: 'neko',
  category: 'NSFW',
  description: 'Returns a neko',
  usage: 'neko'
};
