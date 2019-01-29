const { version } = require('discord.js');
const moment = require('moment');
const Discord = require('discord.js');
require('moment-duration-format');

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
    const embed = new Discord.RichEmbed()
    .setTitle('Cytrus Status')
    .setDescription(`
  Ram Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
  Uptime: ${duration}
  Users: ${client.users.size.toLocaleString()}
  Servers: ${client.guilds.size.toLocaleString()}
  Channels: ${client.channels.size.toLocaleString()}
  Discord.js: v${version}
  Node.js: ${process.version}`)
    .setColor('#eeeeee');

    message.channel.send(embed);
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['stats'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'status',
  category: 'System',
  description: 'Reuturns the bots status',
  usage: 'status'
};
