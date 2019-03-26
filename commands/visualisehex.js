const Discord = require('discord.js');

const validate = (color) => {
  if(!color || typeof color !== 'string') return false;
  color = color.replace('#', '');

  switch(color.length) {
    case 3: return /^[0-9A-F]{3}$/i.test(color);
    case 6: return /^[0-9A-F]{6}$/i.test(color);
    case 8: return /^[0-9A-F]{8}$/i.test(color);
    default: return false;
  }
};

exports.run = async (client, message, args, level) => {
  try {
    if (!args[0]) return message.channel.send('You need to supply the HEX Code!');
    if (!validate(args.join(' '))) return message.reply('Thats not a valid HEX Code!');

    message.channel.send(new Discord.RichEmbed().setColor(args[0]).setTitle('HEX Visualiser'));
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
  name: 'visualisehex',
  category: 'General',
  description: 'Sends an Embed with the specified HEX Code as the color',
  usage: 'visualisehex <hex>'
};
