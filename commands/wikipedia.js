const Discord = require('discord.js');
const wikipedia = require('wikipediajs');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    wikipedia.search(args.join(' ')).then((res) => {
      let info = res.query.pages[Object.keys(res.query.pages)[0]]
      let embed = new Discord.RichEmbed()
      .setTitle(info.title)
      .setDescription('['+info.title+']('+info.fullurl.replace('(', '\\(').replace(')', '\\)').replace('`', '\`')+')')
      .setColor('#eeeeee');

      message.channel.send(embed);
    }).catch(message.reply('There was an error!'));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['wiki'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'wikipedia',
  category: 'General',
  description: 'Searches Wikipedia for your search term',
  usage: 'wikipedia <search term>'
};
