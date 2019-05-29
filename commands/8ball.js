const posibleAnswers = [
  'wut',
  'yes',
  'no',
  '..........................................no u',
  'idk',
  'No',
  'yes',
  'uhh',
  'i dont think so m8',
  'tHe AnSwEr LiEs WiThIn'
];

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (args[0]) message.channel.send(posibleAnswers.random());
    else message.reply('You need to provide the question!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['8b'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: '8ball',
  category: 'General',
  description: 'Returns the answer to any questions you have',
  usage: '8ball <question>'
};
