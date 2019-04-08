const request = require('request');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    request({url: 'https://api.ksoft.si/meme/rand-reddit/engrish', json: true, headers: {
      Authorization: 'Bearer ' + process.env.KSOFT_TOKEN
    }}, (req, res, json) => {
      let embed = new client.Embed('normal', {
        title: json.title,
        image: json.image_url,
        author: {
          name: json.author
        },
        url: json.source
      });
            
      message.channel.send(embed);
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
  name: 'engrish',
  category: 'Fun',
  description: 'Returns a meme from r/engrish',
  usage: 'engrish'
};
