exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (client.items.has(message.author.id)){
      if (!client.items.has(message.author.id, 'owo')) return message.reply('You dont have access to this command!');
    } else return message.reply('You dont have access to this command!');
    
    message.channel.send('OwO Whats This?');
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
  name: 'owo',
  category: 'Fun',
  description: 'OwO whats this?',
  usage: 'owo'
};