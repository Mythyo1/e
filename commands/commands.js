exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('Commands: ' + Number(client.commands.size + 1));
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['cmds'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'commands',
  category: 'General',
  description: 'Returns the ammount of commands in Cytrus',
  usage: 'commands'
};
