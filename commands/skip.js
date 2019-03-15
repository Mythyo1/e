exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars  
  try {
    let server = client.music[message.guild.id];
    
    if (!server) return message.channel.send('There is nothing playing!');
    if (!server.dispatcher) return message.channel.send('There is nothing playing!');
    
    server.dispatcher.emit('end');
    message.channel.send('Song Skipped!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err.stack).catch();
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
