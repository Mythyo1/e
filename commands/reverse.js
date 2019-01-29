
exports.run = async (client, message, args, level) => {
  try {
    const str = args.join(' ');
    let msg = message.reply(str.split('').reverse().join(''));
    message.react('🔁');
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
  name: 'reverse',
  category: 'Fun',
  description: 'Returns the string you input reversed',
  usage: 'reverse <text>'
};
