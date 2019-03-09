exports.run = async (client, message, args, level) => {
  try {
    client.music[message.guild.id] = {queue: [], loop: false};
    message.reply('The queue is wiped!');
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'Moderator'
};

exports.help = {
  name: 'wipe',
  category: 'Music',
  description: 'Wipes the queue',
  usage: 'wipe'
};
