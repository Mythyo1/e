exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!client.music[message.guild.id]) client.music[message.guild.id] = {queue: [], loop: false, loopqueue: false};

    let server = client.music[message.guild.id];
    
    if (server.loopqueue) server.loopqueue = false;
    else server.loopqueue = true;
    
    message.channel.send('The queue loop is now ' + String(server.loopqueue ? 'On' : 'Off'));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'Moderator'
};

exports.help = {
  name: 'loopqueue',
  category: 'Music',
  description: 'Toggles queue\'s loop',
  usage: 'loopqueue'
};
