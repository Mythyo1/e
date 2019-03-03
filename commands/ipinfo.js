const request = require('request');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.reply('You need to input the IP to lookup!');
    
    request({url: 'https://ipinfo.io/' + args.join(' ') + '/json', json: true, headers: {
      Authorization: 'Bearer ' + process.env.IPINFO_API_KEY
    }}, (req, res, json) => {
      if (!json.hostname) return message.reply('Thats not a valid ip!');
      
      let embed = new client.Embed('normal', {
        title: json.ip,
        description: 'Info for ' + json.ip + '\n' + json.org,
        fields: [
          {
            title: 'City',
            text: json.city,
            inline: true
          },
          {
            title: 'Region',
            text: json.region,
            inline: true
          },
          {
            title: 'Country',
            text: json.country
          },
          {
            title: 'Hostname',
            text: json.hostname
          }
        ]
      });
            
      message.channel.send(embed);
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['iplookup'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'ipinfo',
  category: 'General',
  description: 'Does an IP Lookup',
  usage: 'ipinfo <ip address>'
};
