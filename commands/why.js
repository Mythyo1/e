const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    let settings = client.getSettings(message.guild.id);

    require('request')({url: 'https://nekos.life/api/why', json: true}, (req, res, json) => {
      let embed = new Discord.RichEmbed()
      .setTitle('Why?')
      .setColor('#eeeeee')
      .setDescription(json.why.replace(/^\w/, c => c.toUpperCase()));
      
      message.channel.send(embed);
    });
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
  name: 'why',
  category: 'Fun',
  description: 'Why do you want to use this command?',
  usage: 'why'
};