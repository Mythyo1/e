const Discord = require('discord.js');
const google = require('google');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try { 
    google.resultsPerPage = 5;

    google(args.join(' '), (err, res) => {
      if (err) return message.channel.send('There was an error!\n' + err);
      
      if (!res.links[0].href) return message.reply('I couldent find anything for your search term!');
      
      let link = res.links[0];
      
      let embed = new client.Embed('normal', {
        title: link.title,
        url: link.href,
        footer: link.href,
        description: client.truncate(link.description, 2000)
      });
      
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
  name: 'google',
  category: 'General',
  description: 'Returns an animation of how to google somthing',
  usage: 'google <query>'
};
