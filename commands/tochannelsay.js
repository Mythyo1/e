exports.run = async (client, message, args, level) => {
  try {
    message.delete();
    const str = args.slice(1).join(' ');
    message.guild.channels.find(c => c.name == args[0]).send(str);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['tcs', 'tcsay'],
  guildOnly: true,
  permLevel: 'Bot Developer'
};

exports.help = {
  name: 'tochannelsay',
  category: 'General',
  description: 'Says the string you input in the specified channel',
  usage: 'tochannelsay <channel name> <text>'
};
