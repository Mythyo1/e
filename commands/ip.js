exports.run = async (client, message, args, level) => {
  const http = require('http');
  
  if(message.author.id == client.config.owner || !message.author.id == client.config.coowner) {
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
      resp.on('data', function(ip) {
        message.author.send('Cytrus public IP: ' + ip);
      });
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'Bot Admin'
};

exports.help = {
  name: 'ip',
  category: 'System',
  description: 'Returns the Cytrus public IP',
  usage: 'ip'
};
