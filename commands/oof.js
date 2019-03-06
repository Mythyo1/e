exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('Oof');
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
  name: 'oof',
  category: 'Fun',
  description: 'Returns "oof"',
  usage: 'oof'
};
