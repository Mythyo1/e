exports.run = async (client, message, args, level) => {
  try {
    const notAnimated = [];
    const animated = [];
    message.guild.emojis.map(emoji => {
      if (emoji.animated === true) notAnimated.push(emoji.toString());
      else animated.push(emoji.toString());
    });

    message.channel.send(notAnimated.join(' ') + '\n\n' + animated.join(' '));
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['emoji'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'emojis',
  category: 'General',
  description: 'Returns all of the emojis in the server.',
  usage: 'emojis'
};
