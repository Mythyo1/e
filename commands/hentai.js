exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let hentai = await client.nekoslife.nsfw.randomHentaiGif();
    let embed = new client.Embed('blend', {
      title: 'Hentai',
      image: hentai.url
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
  name: 'hentai',
  category: 'NSFW',
  description: 'Returns hentai',
  usage: 'hentai'
};
