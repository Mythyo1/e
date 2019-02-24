const ytdl = require('ytdl-core');
const { YTSearcher } = require('ytsearcher');
const { validateURL } = ytdl;

const MusicStream = (message, guild, connection, client) => {
  let server = client.music[guild.id];
  if (!server.queue[0] && !server.loop) return message.reply('There is nothing in the queue!');

  server.dispatcher = connection.playStream(ytdl(server.queue[0]));

  server.dispatcher.on('end', () => {
    if (!server.loop) server.queue.shift();
    if (server.loop) MusicStream(message, guild, connection, client);
  });
};

exports.run = async (client, message, args, level) => {
  try {
    if (message.member.voiceChannelID !== null) {
      if (!message.guild.voiceConnection) message.guild.channels.get(message.member.voiceChannelID).join().catch(err => {
        return message.channel.send('I couldent connect to your voice channel!\n' + err);
      });
      
      if (!client.music[message.guild.id]) client.music[message.guild.id] = {queue: [], loop: false};
      if (!client.music[message.guild.id].queue) client.music[message.guild.id].queue = [];

      let server = client.music[message.guild.id];
      
      if (server.dispatcher) {
        if (!args[0]) return message.reply('You need to input a song to add!');
        
        let searcher = new YTSearcher(process.env.YOUTUBE_API_KEY);
        let res = await searcher.search(args.join(' '));

        server.queue.push(res.first.url);
        message.channel.send('Added a video with a URL of ' + res.first.url + ' to the queue!');
      } else {
        if (!args[0]) MusicStream(message, message.guild, message.guild.voiceConnection, client);
        else {
          if (validateURL(args.join(' '))) {
            server.queue.push(args.join(' '));
            message.channel.send('Added a video with a URL of ' + args.join(' ') + ' to the queue!');
          } else {
            let searcher = new YTSearcher(process.env.YOUTUBE_API_KEY);
            let res = await searcher.search(args.join(' '));

            server.queue.push(res.first.url);
            message.channel.send('Added a video with a URL of ' + res.first.url + ' to the queue!');
          }

          MusicStream(message, message.guild, message.guild.voiceConnection, client);
        }
      }
      
      if (server.queue[0]) message.channel.send('Playing the queue!');
    } else message.reply('You need to join a voice channel first!');
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
