exports.run = async (client, message, args, level) => {
  message.channel.send('https://cdn.drawception.com/images/panels/2017/12-4/Lz4rnPE4Rt-2.png');
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'oofception',
  category: 'Fun',
  description: 'Returns "Oofception"',
  usage: 'oofception'
};
