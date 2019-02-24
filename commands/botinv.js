exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    client.generateInvite(['ADMINISTRATOR']).then(link => message.channel.send('Bot Invite: ' + link));
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
