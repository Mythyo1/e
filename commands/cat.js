const request = require('request');

exports.run = async (client, message, args, level) => {
  request({json: true, url: 'http://aws.random.cat/meow'}, (err, res, json) => {
    if (err) {
      message.reply('There was an error!');
    } else {
      message.reply(json.file);
    }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['c'],
  permLevel: 'User'
};

exports.help = {
  name: 'cat',
  category: 'Fun',
  description: 'Returns a random cat',
  usage: 'cat'
};
