exports.run = (client, message, args, level) => {
  if (!args[0]) return message.reply('You have to input a message ID!');
  
  client.selfrole.delete(message.id);
  message.channel.send('Entry deleted!');
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'Administrator'
};

exports.help = {
  name: 'selfroleremove',
  category: 'Moderation',
  description: 'Deletes a selfrole entry',
  usage: 'selfroleremove <message id> <role id>'
};