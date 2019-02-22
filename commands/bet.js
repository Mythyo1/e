const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let settings = client.getSettings(message.guild.id);
    if (message.content.split(' ')[0] !== settings.prefix + 'bet') return message.reply('You cant use the mention prefix for this command! Use ' + settings.prefix + 'bet instead.');
    
    let member = message.mentions.members.first();
    let embed;
    
    if (member) {
      if (Math.random() < 0.5) {
        embed = new Discord.RichEmbed()
        .setTitle(message.author.username + ' betes ' + member.user.username)
        .setColor('#363942')
        .setDescription(message.author.username + ' bet ' + member.user.username + '!\n' + message.author.username + ' didn\'t win the bet ' + member.user.username + '!');
      } else {
        embed = new Discord.RichEmbed()
        .setTitle(message.author.username + ' bet ' + member.user.username)
        .setColor('#363942')
        .setDescription(message.author.username + ' bet ' + member.user.username + ' and won the bet!');
      }
    } else message.reply('You need to mention the person you want to bet!');
    
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
  name: 'bet',
  category: 'Fun',
  description: 'betes a member',
  usage: 'bet <member>'
};
