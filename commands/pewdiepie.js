exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.reply('https://youtube.com/PewDiePie?sub_confirmation=1');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['pewds'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'pewdiepie',
  category: 'Fun',
  description: 'Returns the PewDiePie subscribe link',
  usage: 'pewdiepie'
};
