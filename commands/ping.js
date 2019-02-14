const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    const msg = await message.channel.send('<@'+message.author.id+'>');

    let embed = new Discord.RichEmbed()
    .setTitle('Ping')
    .setDescription(`Message Trip: ${msg.createdTimestamp - message.createdTimestamp}ms\nWebsocket Heartbeat: ${Math.round(client.ping)}ms`)
    .setColor('#eeeeee');

    msg.edit(embed);
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
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
  description: 'Returns CytrusBot\'s ping',
  usage: 'ping'
};
