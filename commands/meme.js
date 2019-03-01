const Discord = require('discord.js');
const memes = require('memejsfork');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    memes((meme) => {
      let embed = new Discord.RichEmbed()
      .setTitle(meme.title[0])
      .setURL(meme.url[0])
      .setColor('#eeeeee');

      message.channel.send(embed);
    });
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
  name: 'meme',
  category: 'Fun',
  description: 'Returns a ranom meme',
  usage: 'meme'
};
