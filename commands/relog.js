exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    await message.channel.send('Logging out...');
    
    client.destroy();
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'Bot Support'
};

exports.help = {
  name: 'relog',
  category: 'System',
  description: 'Logs out then back in to discord',
  usage: 'relog'
};
