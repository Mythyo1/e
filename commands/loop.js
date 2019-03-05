exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!client.music[message.guild.id]) client.music[message.guild.id] = {queue: [], loop: false};
    if (!client.music[message.guild.id].queue) client.music[message.guild.id].queue = [];

    let server = client.music[message.guild.id];
    
    if (server.loop) server.loop = false;
    else server.loop = true;
    
    message.channel.send('The loop is now ' + String(server.loop ? 'On' : 'Off'));
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
  name: 'loop',
  category: 'Music',
  description: 'Toggles the loop',
  usage: 'loop'
};
