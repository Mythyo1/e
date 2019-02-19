const { Attachment } = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    message.channel.send(new Attachment('https://images-ext-1.discordapp.net/external/Em2LoHD1x7u-ZlAef5sxk01FVgigU6THSXWM9Qt3rAQ/https/images-ext-2.discordapp.net/external/yamQvDVPk_31_63W6ED9QTD5KkF6sG9Ce-vGJVFwP7A/%253Fv%253D1/https/cdn.discordapp.com/emojis/410281157410947074.gif'));
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
  name: 'typing',
  category: 'Fun',
  description: 'Returns a typing cat',
  usage: 'typing'
};
