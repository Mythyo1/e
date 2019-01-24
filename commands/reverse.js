
exports.run = async (client, message, args, level) => {
  const str = args.join(' ');
  let msg = message.reply(str.split('').reverse().join(''));
  message.react('🔁');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'reverse',
  category: 'Fun',
  description: 'Returns the string you input reversed',
  usage: 'reverse <text>'
};
