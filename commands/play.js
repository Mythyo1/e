const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const opusscript = require('opusscript');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (message.guild.voiceConnection) {
    let dispatcher = message.guild.voiceConnection.playStream(ytdl(args[0], {audioonly: true}), {passes: 6})
    .then(() => {
      let embed = new Discord.RichEmbed()
      .setTitle('Play')
      .setDescription('Playing the song!')
      .addField('Song:', args[0])
      .setFooter('Requested by ' + message.author.username);
      
      message.channel.send(embed);
    })
    .catch('Their was an error!');
  } else {
    message.reply('I need to be in a voice channel to play a song!');
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 'User'
};

exports.help = {
  name: 'play',
  category: 'Music',
  description: 'Plays music in your voice channel',
  usage: 'play <youtube video URL>'
};
