const Cryptr = require('cryptr');
const algorithm = 'aes-256-ctr';

const decrypt = (text, key) => {
  let cryptr = new Cryptr(key);
  return cryptr.decrypt(text);
};

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.channel.send('You need to input a key to decrypt the text with!');
    if (!args[1]) return message.channel.send('You need to input text to decrypt!');
    
    message.channel.send(decrypt(args.slice(1).join(' '), args[0]));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'encrypt',
  category: 'General',
  description: 'Encrypts text in aes-256-ctr',
  usage: 'encrypt <key> <text>'
};
