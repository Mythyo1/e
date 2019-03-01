const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let msg = await message.channel.send('<@'+message.author.id+'>');

    let embed = new client.Embed('normal', {
      title: 'Ping',
      description: `Message Trip: ${msg.createdTimestamp - message.createdTimestamp}ms\nWebsocket Heartbeat: ${Math.round(client.ping)}ms`
    });

    msg.edit(embed);
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
  name: 'ping',
  category: 'General',
  description: 'Returns ' + require('../app').user.username + '\'s ping',
  usage: 'ping'
};
