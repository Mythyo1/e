exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    client.items.ensure(message.author.id, {});
    if (!client.items.has(message.author.id, 'rickroll')) return message.reply('You dont have access to this command!');
    
    message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'rickroll',
  category: 'Fun',
  description: 'Returns Never Gona Give You Up',
  usage: 'rickroll'
};