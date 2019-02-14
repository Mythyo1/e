const Discord = require('discord.js');
const entries = require('../data/hangman.json');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let i = Math.floor(Math.random() * entries.length + 1) - 1;
    let res = await client.awaitReply(message, entries[i].msg);
    
    if (res == entries[i].answer) message.channel.send('Correct!');
    else message.channel.send('Wrong!');
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['hm'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'hangman',
  category: 'Game',
  description: 'Returns a game of Hangman',
  usage: 'hangman'
};
