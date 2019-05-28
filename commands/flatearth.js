const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('If the earth isn\'t flat, explain this:');
    message.channel.send(new Discord.Attachment('https://cdn.glitch.com/1654f0f1-6c26-4af8-9359-621c155eff8d%2Fimage.png'));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['flat', 'fe', 'fearth', 'flearth'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'flatearth',
  category: 'Fun',
  description: 'Shows why the Earth is flat.',
  usage: 'flatearth'
};
