const Discord = require('discord.js');
const { Attachment } = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.channel.send(new Attachment('https://cdn.glitch.com/1654f0f1-6c26-4af8-9359-621c155eff8d%2FpikaOh.png'));
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
  name: 'pikaoh',
  category: 'Fun',
  description: 'Returns suprised Pikachu',
  usage: 'pikaoh'
};
