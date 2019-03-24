exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let anal = await client.nekoslife.nsfw.anal();
    let embed = new client.Embed('blend', {
      title: 'Anal',
      image: anal.url
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
  name: 'anal',
  category: 'NSFW',
  description: 'Returns an anal picture',
  usage: 'anal'
};