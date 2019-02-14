const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let settings = client.getSettings(message.guild.id);
    if (message.content.split(' ')[0] !== settings.prefix + 'punch') return message.reply('You cant use the mention prefix for this command! Use ' + settings.prefix + 'punch instead.');
    
    let member = message.mentions.members.first();
    let embed;
    
    if (member) {
      if (Math.random() < 0.5) {
        embed = new Discord.RichEmbed()
        .setTitle(message.author.username + ' punches ' + member.user.username)
        .setColor('#eeeeee')
        .setDescription(message.author.username + ' punched ' + member.user.username + '!\n' + message.author.username + ' didn\'t knock ' + member.user.username + ' out!');
      } else {
        embed = new Discord.RichEmbed()
        .setTitle(message.author.username + ' punches ' + member.user.username)
        .setColor('#eeeeee')
        .setDescription(message.author.username + ' punched ' + member.user.username + ' and managed to knock ' + member.user.username + ' out!');
      }
    } else message.reply('You need to mention the person you want to punch!');
    
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
  name: 'punch',
  category: 'Fun',
  description: 'Punches a member',
  usage: 'punch <member>'
};
