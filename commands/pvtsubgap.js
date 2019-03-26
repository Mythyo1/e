const Discord = require('discord.js');
const request = require('request');
const numeral = require('numeral');

const pewds = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&key=' + process.env.YOUTUBE_API_KEY + '&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw';
const tseries = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&key=' + process.env.YOUTUBE_API_KEY + '&id=UCq-Fj5jknLsUf-MWSy4_brA';

exports.run = async (client, message, args, level) => {
  try {
    let psubs;
    let tsubs;

    request({url: pewds, json: true}, (req, res, jsonp) => {
      if (jsonp.error) return message.channel.send('There was an error!');

      psubs = jsonp.items[0].statistics.subscriberCount;
      request({url: tseries, json: true}, (req, res, jsont) => {
        tsubs = jsont.items[0].statistics.subscriberCount;

        let embed = new Discord.RichEmbed()
        .setTitle('PewDiePie VS T-Series')
        .setDescription('Sub Gap: ' + numeral(Number(psubs) - Number(tsubs)).format('0,0'))
        .addField('PewDiePie', numeral(psubs).format('0,0') + ' Subscribers')
        .addField('T-Series', numeral(tsubs).format('0,0') + ' Subscribers');

        if (Number(psubs) - Number(tsubs) >= 25000) embed.setColor('#32cd32');
        else if (Number(psubs) - Number(tsubs) > 1000 && Number(psubs) - Number(tsubs) < 25000) embed.setColor('#FFFF33');
        else if (Number(psubs) - Number(tsubs) <= 10000) embed.setColor('#ff0303');

        message.channel.send(embed);
      });
    });
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['pvt', 'sg', 'subgap'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'pvtsubgap',
  category: 'General',
  description: 'Returns the sub gap between T-Series vs PewDiePie',
  usage: 'pvtsubgap'
};
