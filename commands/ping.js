const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send('<@'+message.author.id+'>');
  
  let embed = new Discord.RichEmbed()
  .setTitle('Ping')
  .setDescription(`Latency: ${msg.createdTimestamp - message.createdTimestamp}ms\nAPI Latency: ${Math.round(client.ping)}ms`)
  .setColor('#eeeeee');
  
  msg.edit(embed);
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'ping',
  category: 'General',
  description: 'Returns CytrusBot\'s ping',
  usage: 'ping'
};
