const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    if (message.member.voiceChannel) {
      if (!message.guild.voiceConnection) {
        message.member.voiceChannel.join().then(message.channel.send('Ive joined the voice channel!')).catch(message.reply('Their was an error!'));
      } else {
        message.reply('Im already in a voice channel!');
      }
    } else {
      message.reply('You need to join a voice channel first!');
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'join',
  category: 'Music',
  description: 'Joins your voice channel',
  usage: 'join'
};