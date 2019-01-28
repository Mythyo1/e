exports.run = async (client, message, args, level) => {
  message.channel.send('Oof');
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'oof',
  category: 'Fun',
  description: 'Returns "oof"',
  usage: 'oof'
};
