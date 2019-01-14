const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  if (args[0] == '' || !args[0]) {
    message.channel.send('Please supply the type of music to send.');
    const embed = new Discord.RichEmbed()
    .setColor('#eeeeee')
    .setDescription('Rap\nGames\Dubstep\nCatchy\nNightcore\nMemes')
    .setTitle('Cytrus Music Types');
    
    message.channel.send(embed);
  } else {
    message.channel.send(client.spotify.get(args[0]));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s'],
  permLevel: 'User'
};

exports.help = {
  name: 'spotify',
  category: 'Music',
  description: 'Returns a spotify playlist based on the type you choose',
  usage: 'spotify <type>'
};
