const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (message.author.hasPermission('CREATE_INSTANT_INVITE')) {
      message.channel.createInvite().then(invite => message.channel.send(`I've succesfuly created the invite!\nCode: ${invite.code}`));
    } else message.reply('You dont have the permissions to ');
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
