exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (message.guild.voiceConnection) {
      message.member.voiceChannel.leave();
      message.reply('I\'ve left the voice channel!');
    } else {
      message.reply('I need to be in a voice channel first!');
    }
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['l'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'leave',
  category: 'Music',
  description: 'Leaves your voice channel',
  usage: 'leave'
};
