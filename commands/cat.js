const request = require('request');
const { Attachment } = require('discord.js');

exports.run = async (client, message, args, level) => {
  request({json: true, url: 'http://aws.random.cat/meow'}, (err, res, json) => {
    if (err) {
      message.reply('There was an error!');
    } else {
      message.reply(new Attachment(json.file));
    }
  });
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'cat',
  category: 'Fun',
  description: 'Returns a random cat',
  usage: 'cat'
};
