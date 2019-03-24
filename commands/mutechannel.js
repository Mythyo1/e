exports.run = async (client, message, args, level) => {
  try {
    await message.channel.send('Muting Channel...');
    
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    });
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['mc', 'raid'],
  guildOnly: true,
  permLevel: 'Administrator'
};

exports.help = {
  name: 'mutechannel',
  category: 'Moderation',
  description: 'Mutes the channel',
  usage: 'mutechannel'
};
