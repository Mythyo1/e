const ud = require('urban-dictionary');
const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  ud.term(args.join(' ')).then((result) => {
    const entries = result.entries;
    let embed = new Discord.RichEmbed()
    .setTitle(entries[0].word)
    .setDescription(entries[0].definition)
    .addField('Example:', entries[0].example)
    .setFooter('Requested by ' + message.author.username + message.author.tag)
    .setColor('#eeeeee');
    
    message.channel.send(embed);
  }).catch((error) => {
    message.channel.send('Their was an error!');
  });
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'urban',
  category: 'General',
  description: 'Returns your search term from the Urban Dictionary',
  usage: 'urban <term>'
};
