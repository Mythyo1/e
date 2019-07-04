const request = require('request');
const { Attachment } = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    request({json: true, url: 'http://aws.random.cat/meow'}, (err, res, json) => {
      if (err) {
        message.reply('There was an error!');
      } else {
        message.channel.send(new Attachment(json.file));
      }
    });
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
  name: 'cat',
  category: 'Fun',
  description: 'Returns a random cat',
  usage: 'cat'
};
