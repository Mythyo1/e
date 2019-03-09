exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('REEEEE');
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['re', 'reee', 'reeee', 'reeeee'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'ree',
  category: 'Fun',
  description: 'Returns "REEEEE"',
  usage: 'ree'
};
