const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let tickle = await client.nekoslife.sfw.tickle();
    
    let embed = new Discord.RichEmbed()
    .setTitle('Tickle')
    .setImage(tickle.url)
    .setColor('#363942');

    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['tick'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'tickle',
  category: 'Weeb',
  description: 'Returns a tickling GIF.',
  usage: 'tickle'
};
