const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.reply('You need to input somthing to make an achievement!');
    
    message.channel.send(new Discord.Attachment('https://www.minecraftskinstealer.com/achievement/a.php?i=20&h=Achievment+Get!&t=' + args.join('+').replace('#', '%23'), 'mc.png'))  
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['mcs'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'achievement',
  category: 'Fun',
  description: 'Creates an achievement from Minecraft',
  usage: 'achievement <string>'
};
