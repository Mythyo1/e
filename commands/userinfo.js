const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let settings = client.getSettings(message.guild.id);
    
    if (message.content.split(' ')[0] !== settings.prefix + 'userinfo' && message.content.split(' ')[0] !== settings.prefix + 'user' && message.content.split(' ')[0] !== settings.prefix + 'ui') return message.reply('You cant use the mention prefix for this command! Use ' + settings.prefix + 'userinfo instead.');
    let user = message.mentions.members.first() || message.member;
    
    let embed = new Discord.RichEmbed()
    .setTitle(user.user.username)
    .setDescription(`
ID: ${user.id}
Name: ${user.user.username}
Icon URL: ${user.user.avatarURL}
Account Created At: ${user.user.createdAt}
Joined At: ${user.joinedAt}
Game: ${user.user.presence.game}
Status: ${user.user.presence.status}
Full Name: ${user.user.tag}`)
    .setThumbnail(user.user.avatarURL)
    .setColor('#eeeeee');
    
    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['user', 'ui'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'userinfo',
  category: 'Utility',
  description: 'Returns info about the user',
  usage: 'userinfo'
};
