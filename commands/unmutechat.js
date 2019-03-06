exports.run = async (client, message, args, level) => {
  try {
    await message.channel.send('Unmuting Chat...');
    client.raids.delete(message.guild.id);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['uc', 'unraid'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'unmutechat',
  category: 'Moderation',
  description: 'Unmutes the chat Server-wide',
  usage: 'unmutechat'
};
