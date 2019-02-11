const math = require('mathjs');

exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('Output: ' + math.eval(args.join(' ')));
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
  name: 'math',
  category: 'Fun',
  description: 'Does math and returns the value',
  usage: 'math'
};
