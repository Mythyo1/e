const request = require('request');

exports.run = async (client, message, args, level) => {
  try {
    request({json: true, url: 'https://random-d.uk/api/v1/random'}, (err, res, json) => {
      if (err) {
        message.reply('There was an error!');
      } else {
        message.reply(json.url);
      }
    });
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'duck',
  category: 'Fun',
  description: 'Returns a random duck',
  usage: 'duck'
};
