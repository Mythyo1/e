exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.channel.send('https://www.youtube.com/watch?v=L_jWHffIx5E');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'allstar',
  category: 'Fun',
  description: 'Returns All Star',
  usage: 'allstar'
};
