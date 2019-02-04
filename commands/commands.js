exports.run = async (client, message, args, level) => {
  try {
    let i = 0;
     client.commands.forEach(() => i++);
    message.channel.send('Commands: ' + i);
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['cmd'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'commands',
  category: 'General',
  description: 'Returns the ammount of commands in Cytrus',
  usage: 'commands'
};
