const { version } = require('discord.js');
const moment = require('moment');
const Discord = require('discord.js');
require('moment-duration-format');

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
  const embed = new Discord.RichEmbed()
  .setTitle('Cytrus Status')
  .setDescription(`
Ram Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
Uptime: ${duration}
Users: ${client.users.size.toLocaleString()}
Servers: ${client.guilds.size.toLocaleString()}
Channels: ${client.channels.size.toLocaleString()}
Discord.js: v${version}\nNode: ${process.version}`)
  .setColor('#eeeeee');
  
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['status'],
  permLevel: 'User'
};

exports.help = {
  name: 'stats',
  category: 'System',
  description: 'Gives some useful bot statistics',
  usage: 'stats'
};
