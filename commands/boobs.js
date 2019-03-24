exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let boobs = await client.nekoslife.nsfw.boobs();
    let embed = new client.Embed('blend', {
      title: 'Boobs',
      image: boobs.url
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
  name: 'boobs',
  category: 'NSFW',
  description: 'Returns a boob picture',
  usage: 'boobs'
};