exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('Ayyyyy');
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
  name: 'ayy',
  category: 'Fun',
  description: 'Returns "Ayyyy"',
  usage: 'ayy'
};
