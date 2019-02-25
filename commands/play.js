const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const { YTSearcher } = require('ytsearcher');
const { validateURL } = ytdl;
const searcher = new YTSearcher(process.env.YOUTUBE_API_KEY);

const MusicStream = (message, guild, connection, client) => {
  let server = client.music[guild.id];
  
  if (!server) server = {queue: [], loop: false};
  if (!server.queue) server.queue = [];
  
  server.dispatcher = connection.playStream(ytdl(server.queue[0]), {volume: 0.5, passes: 11});
  server.dispatcher.song = server.queue[0];
  
  server.dispatcher.on('end', () => {
    if (!server.loop) {
      server.queue.shift();
      return MusicStream(message, guild, connection, client);
    }
    
    if (server.loop) MusicStream(message, guild, connection, client);
  });
};

exports.run = async (client, message, args, level) => {
  try {
    let server = client.music[message.guild.id];
    
    if (!message.member.voiceChannelID) return message.reply('You need to be in a Voice Channel to use this command!');
    
    if (message.guild.voiceConnection) {
      if (message.guild.voiceConnection.channel.id !== message.member.voiceChannelID) return message.reply('You need to be in the same voice channel Cytrus is in to use this command!');
    }
      
    message.guild.channels.get(message.member.voiceChannelID).join();
    
    if (args[0]) {
      let result = await searcher.search(args.join(' '));
      server.queue.push(result.first.url);
      
      let embed = new Discord.RichEmbed()
      .setTitle(result.first.title)
      .setDescription(client.truncate(result.first.description, 100))
      .setThumbnail(result.first.thumbnails.medium.url)
      .setAuthor(result.first.channelTitle)
      .setURL(result.first.url)
      .setColor('#eeeeee');
      
      message.channel.send(embed);
      
      if (server.dispatcher) {
        if (!server.dispatcher.song) MusicStream(message, message.guild, message.guild.voiceConnection, client);
      } else MusicStream(message, message.guild, message.guild.voiceConnection, client);
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['p'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'play',
  category: 'Music',
  description: 'Plays the server\'s queue in your voice channel',
  usage: 'play [song]'
};
