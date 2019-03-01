exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!message.mentions.members.first()) return message.reply('You need to mention the user to cuddle with!');
    let cuddle = await client.nekoslife.sfw.cuddle();
    
    let embed = new client.Embed('blend', {
      title: 'Cuddle',
      image: cuddle.url
    });

    message.channel.send(embed);
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
  name: 'cuddle',
  category: 'Weeb',
  description: 'Returns a cuddle',
  usage: 'cuddle <user>'
};
