exports.run = async (client, message, args, level) => {
  try {
    await message.channel.send('Muting Chat...');
    client.raids.set(message.guild.id, true);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['mc', 'raid'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'mutechat',
  category: 'Moderation',
  description: 'Mutes the chat Server-wide',
  usage: 'mutechat'
};
