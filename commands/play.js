const ytdl = require('ytdl-core');
const { YTSearcher } = require('ytsearcher');
const searcher = new YTSearcher(process.env.YOUTUBE_API_KEY);

const MusicStream = (message, connection, client) => {
  if (!client.music[message.guild.id]) client.music[message.guild.id] = {queue: [], loop: false, loopqueue: false};
  if (!client.music[message.guild.id].queue) client.music[message.guild.id].queue = [];
  
  let server = client.music[message.guild.id];
  
  server.dispatcher = connection.playStream(ytdl(client.music[message.guild.id].queue[0]), {volume: 0.5});
  server.dispatcher.song = client.music[message.guild.id].queue[0];
  
  server.dispatcher.on('end', () => {
    server.dispatcher.song = null;
    server.dispatcher = null;
    
    if (!server.queue[0]) return connection.disconnect();
    
    if (!server.loop && !server.loopqueue) server.queue.shift();
    if (server.loopqueue) {
      server.queue.push(server.queue[0]);
      server.queue.shift();
    }
    
    return MusicStream(message, connection, client);
    
  });
};

exports.run = async (client, message, args, level) => {
  try {
    if (!message.member.voiceChannelID) return message.reply('You need to be in a Voice Channel to use this command!');
    
    if (message.guild.voiceConnection) {
      if (message.guild.voiceConnection.channel.id !== message.member.voiceChannelID) return message.reply('You need to be in the same voice channel Cytrus is in to use this command!');
    }
    
    if (!client.music[message.guild.id]) client.music[message.guild.id] = {queue: [], loop: false};
    if (!client.music[message.guild.id].queue) client.music[message.guild.id].queue = [];
    
    let server = client.music[message.guild.id];
    
    message.guild.channels.get(message.member.voiceChannelID).join();
    
    if (args[0]) {
      let result = await searcher.search(args.join(' '));
      
      let embed = new client.Embed('normal', {
        title: result.first.title,
        description: client.truncate(result.first.description, 100),
        thumbnail: result.first.thumbnails.medium.url,
        author: {
          name: result.first.channelTitle
        },
        url: result.first.url
      });
      
      await server.queue.push(result.first.url);
      
      message.channel.send(embed);
      
      if (server.dispatcher) {
        if (!server.dispatcher.song) MusicStream(message, message.guild.voiceConnection, client);
      } else MusicStream(message, message.guild.voiceConnection, client);
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err.stack).catch();
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
