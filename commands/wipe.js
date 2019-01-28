exports.run = async (client, message, args, level) => {
  client.music.queue[message.guild.id] = [];
  message.reply('The queue is wiped!');
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'wipe',
  category: 'Music',
  description: 'Wipes the queue',
  usage: 'wipe'
};
