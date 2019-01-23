
exports.run = async (client, message, args, level) => {
  const str = args.join(' ');
  message.channel.send(str);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'Bot Helper'
};

exports.help = {
  name: 'say',
  category: 'General',
  description: 'Says the string you input',
  usage: 'say <text>'
};
