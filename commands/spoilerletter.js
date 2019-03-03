exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let msg = await message.reply('Spoilerifying...');
    
    if (!args[0]) return message.reply('You need to supply the message!');
    
    let tsl = args.join(' ').split('');
    let out = '';
    
    tsl.forEach(async (l) => out += client.spoilerify(l));
    
    msg.edit(client.truncate(out, 2000));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['sl'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'spoilerletter',
  category: 'Fun',
  description: 'Returns you message with a spoiler for every letter',
  usage: 'spoilerletter <message>'
};
