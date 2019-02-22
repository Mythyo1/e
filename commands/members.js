exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.reply('There are ' + message.guild.memberCount + ' members in this server!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'members',
  category: 'General',
  description: 'Returns the amount of members in the server',
  usage: 'members'
};
