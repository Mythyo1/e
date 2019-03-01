const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('If the earth is not flat, How did the dinasours get flicked off the planet?');
    message.channel.send(new Discord.Attachment('https://cdn.glitch.com/1654f0f1-6c26-4af8-9359-621c155eff8d%2Fimage.png'));
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
  name: 'flatearth',
  category: 'Fun',
  description: 'Why the Earth is flat',
  usage: 'flatearth'
};
