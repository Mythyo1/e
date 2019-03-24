exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.channel.send('You have to input the HEX code!');
      
    let hex = args.join(' ').replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    message.channel.send('RGB Color Code: rgb(' + r + ', ' + g + ', ' + b + ')');
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
  name: 'hextorgb',
  category: 'General',
  description: 'Converts HEX to RGB',
  usage: 'hextorgb <value>'
};
