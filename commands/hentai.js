const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!message.channel.nsfw) return message.reply('You need to be in a channel marked as NSFW');

    let hentai = await client.nekoslife.nsfw.randomHentaiGif();
    let embed = new client.Embed('blend', {
      title: 'Hentai',
      image: hentai.url
    });

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
  name: 'hentai',
  category: 'NSFW',
  description: 'Returns hentai',
  usage: 'hentai'
};
