const Discord = require('discord.js');
const ms = require('ms');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!ms(args[0])) return message.reply('You have to input a valid time!');
    if (!args[1]) return message.reply('You have to input the text to remind you of!');
    
    setTimeout(async () => {
      let embed = new client.Embed('normal', {
        title: 'Reminder',
        description: args.slice(1).join(' ')
      });
      
      message.author.send(embed);
    }, ms(args[0]));
    
    message.channel.send('Reminder set!\nReminding you in ' + ms(ms(args[0]), {long: true}) + '\nIll remind you in your DMS!');
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
  name: 'remind',
  category: 'General',
  description: 'Reminds you in the specified time of the specified thing',
  usage: 'remind <time> <text>'
};