const request = require('request');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.reply('You need to input the song to search!');
    
    request({url: 'https://api.ksoft.si/lyrics/search?q=' + encodeURIComponent(args.join(' ')), json: true, headers: {
      Authorization: 'Bearer ' + process.env.KSOFT_TOKEN
    }}, (req, res, json) => {
      if (!json.data[0]) return message.reply('I couldn\'t find anything for your search term!');
      if (json.data[0].lyrics.length > 2048) return message.reply('Discord didn\'t let me send that big of a message! Try using https://app.cytrus.ga/lyrics?q=' + encodeURIComponent(args.join(' ')));
      
      let embed = new client.Embed('normal', {
        title: json.data[0].name,
        author: {
          name: json.data[0].artist
        },
        description: json.data[0].lyrics
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
  name: 'lyrics',
  category: 'Music',
  description: 'Returns the lyrics from a song',
  usage: 'lyrics <song>'
};
