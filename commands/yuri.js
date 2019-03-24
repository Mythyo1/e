exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let yuri = await client.nekoslife.nsfw.yuri();
    let embed = new client.Embed('blend', {
      title: 'Yuri',
      image: yuri.url
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
  permLevel: 'User',
  nsfw: true
};

exports.help = {
  name: 'yuri',
  category: 'NSFW',
  description: 'Returns a yuri picture',
  usage: 'yuri'
};