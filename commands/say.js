
exports.run = async (client, message, args, level) => {
  message.delete().catch(console.error);
  const str = args.join(' ');
  message.channel.send(str);
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'Bot Helper'
};

exports.help = {
  name: 'say',
  category: 'General',
  description: 'Says the string you input',
  usage: 'say <text>'
};
