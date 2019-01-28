exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (message.guild.voiceConnection) {
    message.member.voiceChannel.leave()
  } else {
    message.reply('I need to be in a voice channel first!');
  }
};

exports.conf = {
  enabled: true,
  aliases: ['l'],
  permLevel: 'User'
};

exports.help = {
  name: 'leave',
  category: 'Music',
  description: 'Leaves your voice channel',
  usage: 'leave'
};
