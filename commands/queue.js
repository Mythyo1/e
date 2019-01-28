const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars-
  var server = client.music[args[0]] || client.music[message.guild.id];
  
  let output = '';
  if (server.queue) {
    server.queue.forEach((song) => {
      output += song + '\n';
    });
  }
  
  let embed = new Discord.RichEmbed()
  .setTitle('Queue')
  .setDescription(output)
  .setColor('#eeeeee');
  
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'queue',
  category: 'Music',
  description: 'Returns the servers queue',
  usage: 'queue [guild ID]'
};
