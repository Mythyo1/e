exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars  
  try {
    var server = client.music[message.guild.id];
    if (server) {
      if (server.dispatcher) {
        server.dispatcher.emit('end');
        message.channel.send('Song Skipped!');
      } else message.channel.send('There is nothing playing!');
    } else message.channel.send('There is nothing playing!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'Moderator'
};

exports.help = {
  name: 'skip',
  category: 'Music',
  description: 'Skips a song',
  usage: 'skip'
};
