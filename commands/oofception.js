exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('https://cdn.drawception.com/images/panels/2017/12-4/Lz4rnPE4Rt-2.png');
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'oofception',
  category: 'Fun',
  description: 'Returns "Oofception"',
  usage: 'oofception'
};
