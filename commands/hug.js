const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let member = message.mentions.members.first();

    require('request')({url: 'https://nekos.life/api/hug', json: true}, (req, res, json) => {
      if (member) {
        let embed = new Discord.RichEmbed()
        .setTitle(message.author.username + ' hugs ' + member.user.username)
        .setColor('#363942')
        .setDescription(message.author.username + ' hugged ' + member.user.username + '!')
        .setImage(json.url);

        message.channel.send(embed);
      } else message.reply('You need to mention the user you want to hug!');
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
  name: 'hug',
  category: 'Weeb',
  description: 'Returns a hug GIF',
  usage: 'hug <user>'
};
