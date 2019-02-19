exports.run = (client, message, args, level) => {
  if (!args[0]) return message.reply('You have to input a message ID!');
  if (!message.mentions.roles.first() && !args[1]) return message.reply('You have to input a role ID!');
  
  client.selfrole.set(message.id, {guildid: message.guild.id, roleid: message.mentions.roles.first() || args[1], messageid: args[0]});
  message.channel.send('Entry set!\nEntry ID: ' + message.id + '\nTo remove this entry type ' + client.getSettings(message.guild.id).prefix + 'selfroleremove ' + message.id);
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'Administrator'
};

exports.help = {
  name: 'selfroleadd',
  category: 'Moderation',
  description: 'Sets up a selfrole entry',
  usage: 'selfroleadd <message id> <role>'
};