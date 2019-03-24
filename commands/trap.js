exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let trap = await client.nekoslife.nsfw.trap();
    let embed = new client.Embed('blend', {
      title: 'Trap',
      image: trap.url
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
  name: 'trap',
  category: 'NSFW',
  description: 'Returns a trap picture',
  usage: 'trap'
};