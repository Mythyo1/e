exports.run = async (client, message, args, level) => {
  try {
    message.channel.send(args.join(' ').split('').join(' '));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['space'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'spacify',
  category: 'Fun',
  description: 'Spacifyes your message',
  usage: 'spacify'
};
