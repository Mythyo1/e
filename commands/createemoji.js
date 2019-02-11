exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (args[0]) {
      if (args[1]) {
        message.guild.createEmoji(args[0], args[1])
        .then(emoji => message.channel.send('Ive created the <:' + emoji.name + ':> emoji!'));
      } else message.reply('You need to put the name for the emoji in!');
    } else message.reply('You need to put the URL for the emoji in!');
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['createemote', 'ce'],
  guildOnly: true,
  permLevel: 'Moderator'
};

exports.help = {
  name: 'createemoji',
  category: 'General',
  description: 'Creates an emoji in the server',
  usage: 'createemoji <url> <name>'
};
