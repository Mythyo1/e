exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let blowjob = await client.nekoslife.nsfw.bJ();
    let embed = new client.Embed('blend', {
      title: 'Blowjob',
      image: blowjob.url
    });

    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['bj'],
  guildOnly: false,
  permLevel: 'User',
  nsfw: true
};

exports.help = {
  name: 'blowjob',
  category: 'NSFW',
  description: 'Returns a blowjob picture',
  usage: 'blowjob'
};