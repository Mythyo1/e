const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let embed = new Discord.RichEmbed()
    .setTitle(args.join(' '))
    .setURL('https://lmgtfy.com/?q=' + args.join('+'))
    .setDescription('How to google "' + args.join(' ') + '"')
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
  name: 'google',
  category: 'General',
  description: 'Returns an animation of how to google somthing',
  usage: 'google <query>'
};
