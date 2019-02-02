const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.channel.createInvite().then(invite => message.channel.send(`I've succesfuly created the invite!\nCode: ${invite.code}`));
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['ci', 'createinvite'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'invite',
  category: 'General',
  description: 'Creates an invite to the current channel',
  usage: 'invite'
};
