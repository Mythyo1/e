const Discord = require('discord.js');
let kissGifs = [
  'https://media.discordapp.net/attachments/501878048774160385/527912569357336576/kiss_2.gif',
  'https://cdn.discordapp.com/attachments/536964648654733313/537018001556242523/kiss3.gif',
  'https://cdn.discordapp.com/attachments/536964648654733313/537018001556242531/kiss2.gif',
  'https://cdn.discordapp.com/attachments/536964648654733313/537018002319867906/kiss1.gif',
  'https://cdn.discordapp.com/attachments/536964648654733313/537020700452585492/41239-Anime-Cheek-Kiss-Gif-Karen-Kissing-Shino-lewd--1.gif',
  'https://cdn.discordapp.com/attachments/536964648654733313/537020693519269898/giphy.gif',
  'https://cdn.discordapp.com/attachments/536964648654733313/537320818808455198/tenor.gif',
  'https://cdn.discordapp.com/attachments/536964648654733313/537320253944758273/gif-anime-kisses-13.gif',
  'https://cdn.discordapp.com/attachments/536964648654733313/537320253206691850/c71bde60c75c1dbdb1faa6309e4a29a4.gif',
  'https://cdn.discordapp.com/attachments/536964648654733313/537320169194913817/tenor_1.gif',
  'https://cdn.discordapp.com/attachments/536964648654733313/537320168611643405/b65893e0a0aec5b35fd5f7a6cfc423a5.gif'
];

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let settings = client.getSettings(message.guild.id);
    
    let member = message.mentions.members.first();
    let i = Math.floor(Math.random() * (kissGifs.length - 1) + 1);
    
    if (member) {
      let embed = new Discord.RichEmbed()
      .setTitle(message.author.username + ' kisses ' + member.user.username)
      .setColor('#eeeeee')
      .setDescription(message.author.username + ' kissed ' + member.user.username + '!')
      .setImage(kissGifs[i]);

      message.channel.send(embed);
    } else message.reply('You need to mention the user to kiss!');
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'kiss',
  category: 'Fun',
  description: 'Returns a kiss',
  usage: 'kiss <user>'
};
