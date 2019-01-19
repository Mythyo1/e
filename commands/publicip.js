exports.run = async (client, message, args, level) => {
  const http = require('http');
  
  http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
    resp.on('data', function(ip) {
      message.author.send('Cytrus public IP: ' + ip);
      message.channel.send('The Cytrus IP is in your DM\'s!');
    });
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ip'],
  permLevel: 'Bot Admin'
};

exports.help = {
  name: 'publicip',
  category: 'System',
  description: 'Returns the Cytrus public IP',
  usage: 'publicip'
};
