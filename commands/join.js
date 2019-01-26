const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
      message.reply('I have successfully connected to the channel!');
    })
    .catch('Their was an error!');
  } else {
    message.reply('You need to join a voice channel first!');
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['j'],
  permLevel: 'User'
};

exports.help = {
  name: 'join',
  category: 'Music',
  description: 'Joins your voice channel',
  usage: 'join'
};
