const Discord = require('discord.js');
let patGifs = [
  'https://media.discordapp.net/attachments/544536415526977560/546078422351347723/pat-on-head-gif-7.gif?width=441&height=248',
  'https://media.discordapp.net/attachments/544536415526977560/546078992495542295/tenor_1.gif?width=441&height=289',
  'https://media.discordapp.net/attachments/544536415526977560/546079021189038080/tenor_2.gif?width=441&height=237'
]

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let settings = client.getSettings(message.guild.id);

    let member = message.mentions.members.first();
    let i = Math.floor(Math.random() * patGifs.length + 1) - 1;

    if (member) {
      let embed = new Discord.RichEmbed()
      .setTitle(message.author.username + ' patts ' + member.user.username)
      .setColor('#eeeeee')
      .setDescription(message.author.username + ' patted ' + member.user.username + '!')
      .setImage(patGifs[i]);

      message.channel.send(embed);
    } else message.reply('You need to mention the user to pat!');
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
  name: 'pat',
  category: 'Fun',
  description: 'Returns a pat',
  usage: 'pat <user>'
};