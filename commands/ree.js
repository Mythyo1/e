exports.run = async (client, message, args, level) => {
  message.channel.send('REEEEE');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'ree',
  category: 'Fun',
  description: 'Returns "REEEEE"',
  usage: 'ree'
};
