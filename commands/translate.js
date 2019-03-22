const cheerio = require('cheerio');
const request = require('request');

exports.run = async (client, message, args, level) => {
  try {
    if (!['EN', 'DE', 'FR', 'ES', 'PT', 'IT', 'NL', 'PL', 'RU'].includes(args[0])) return message.reply('You need to specify a valid language!');
    
    request('https://www.deepl.com/translator#en/' + args[0].toLowerCase() + '/' + encodeURIComponent(args.slice(1).join(' ')), (req, res, html) => {
      let $ = cheerio.load(html);
      
      message.channel.send('Translated Text:\n' + $('.lmt__translations_as_text__main_translation span').text());
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: false,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'translate',
  category: 'General',
  description: 'Translates the specified text',
  usage: 'translate <EN (English), DE (German), FR (French), ES (Spanish), PT (Portuguese), IT (Italian), NL (Dutch), PL (Polish), RU (Russian)>'
};
