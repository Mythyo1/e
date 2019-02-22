const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let poke = await client.nekoslife.sfw.poke();
    
    let embed = new Discord.RichEmbed()
    .setTitle('Poke')
    .setImage(poke.url)
    .setColor('#363942');

    message.channel.send(embed);
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
  name: 'poke',
  category: 'Weeb',
  description: 'Returns a poke',
  usage: 'poke'
};
