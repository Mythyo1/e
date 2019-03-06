exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('Your messages are ' + Math.floor(Math.random() * 99) + '% lies');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['ld'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'liedetector',
  category: 'Fun',
  description: 'Returns how much you lie',
  usage: 'liedetector'
};
