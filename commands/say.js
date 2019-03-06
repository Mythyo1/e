exports.run = async (client, message, args, level) => {
  try {
    message.delete()
    const str = args.join(' ');
    message.channel.send(str);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'Bot Helper'
};

exports.help = {
  name: 'say',
  category: 'General',
  description: 'Says the string you input',
  usage: 'say <text>'
};
