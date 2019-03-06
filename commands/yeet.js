exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('YEET');
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
  name: 'yeet',
  category: 'Fun',
  description: 'Returns "YEET"',
  usage: 'yeet'
};
