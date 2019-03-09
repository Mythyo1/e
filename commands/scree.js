exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('SCREEEEEEEEEEEE');
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
  name: 'scree',
  category: 'Fun',
  description: 'Returns "SCREEEEEEE"',
  usage: 'scree'
};
