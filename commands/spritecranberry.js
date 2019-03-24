exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.channel.send('https://www.youtube.com/watch?v=OFQ0M-sZ9LQ');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['sprite', 'scranberry'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'spritecranberry',
  category: 'Fun',
  description: 'Returns the Sprite Cranberry commercial',
  usage: 'spritecranberry'
};
