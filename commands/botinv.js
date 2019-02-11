exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.channel.send('Bot Invite: https://discordapp.com/oauth2/authorize?client_id=' + client.user.id + '&permissions=8&scope=bot');
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['ri', 'botinvite', 'bi', 'returninvite'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'botinv',
  category: 'General',
  description: 'Sends the invite for Cytrus',
  usage: 'botinv'
};
