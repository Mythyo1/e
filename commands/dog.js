const request = require('request');

exports.run = async (client, message, args, level) => {
  request({json: true, url: 'https://random.dog/woof.json'}, (err, res, json) => {
    if (err) {
      message.reply('There was an error!');
    } else {
      message.reply(json.url);
    }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d'],
  permLevel: 'User'
};

exports.help = {
  name: 'dog',
  category: 'Fun',
  description: 'Returns a random Dog',
  usage: 'dog'
};
