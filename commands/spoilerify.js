exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let msg = await message.reply('Spoilerifying...');
    
    if (!args[0]) return message.reply('You need to supply the message!');
    
    let out = '';
    
    args.forEach(async (w) => out += client.spoilerify(w) + ' ');
    
    msg.edit(client.truncate(out, 2000));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['spoiler'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'spoilerify',
  category: 'Fun',
  description: 'Spoilerifys your message',
  usage: 'spoilerify <message>'
};
