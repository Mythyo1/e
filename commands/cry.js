const Discord = require('discord.js');
let cryGifs = [
  'https://cdn.discordapp.com/attachments/545336635542339595/546896584575680512/cry1.gif',
  'https://cdn.discordapp.com/attachments/545336635542339595/546896616133754900/cry5.gif',
  'https://cdn.discordapp.com/attachments/545336635542339595/546896692042137600/cry2.gif',
];

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {    
    let i = Math.floor(Math.random() * cryGifs.length + 1) - 1;
    
    let embed = new Discord.RichEmbed()
    .setTitle(message.author.username + ' cried')
    .setColor('#363942')
    .setImage(cryGifs[i]);

    message.channel.send(embed);
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
  name: 'cry',
  category: 'Fun',
  description: 'Returns a cry',
  usage: 'cry <user>'
};
