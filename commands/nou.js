const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let embed = new Discord.RichEmbed()
    .setTitle('No U')
    .setColor('#eeeeee')
    .setImage('https://im5.ezgif.com/tmp/ezgif-5-4468d259ce0a.gif');
    
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
  name: 'nou',
  category: 'Fun',
  description: 'Returns a No U gif',
  usage: 'nou'
};
