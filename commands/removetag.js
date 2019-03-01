exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let msg = await message.channel.send('Deleting tag...');
    if (!args[0]) return message.reply('You have to supply the Tag name!');
    
    if (!client.tags.has(message.guild.id)) client.tags.set(message.guild.id, {});
    if (!client.tags.has(message.guild.id, args.join(' '))) return message.reply('Thats not a valid Tag!');
    
    client.tags.delete(message.guild.id, args.join(' '));
    
    msg.edit('Tag Deleted with the id of ' + message.id + '!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'Administrator'
};

exports.help = {
  name: 'removetag',
  category: 'General',
  description: 'Removes a tag',
  usage: 'removetag tag'
};
