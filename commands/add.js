const Discord = require('discord.js');
const { YTSearcher } = require('ytsearcher');
const { validateURL } = require('ytdl-core');

const searcher = new YTSearcher(process.env.YOUTUBE_API_KEY);

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!client.music[message.guild.id]) client.music[message.guild.id] = {queue: [], loop: false};
    if (!client.music[message.guild.id].queue) client.music[message.guild.id].queue = [];

    var server = client.music[message.guild.id];
    
    if (validateURL(args.join(' '))) server.queue.push(args.join(' '));
    else {
      let res = await searcher.search(args.join(' '));

      server.queue.push(res.first.url);
    }
    message.channel.send('The song is in the queue!');
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
  name: 'add',
  category: 'Music',
  description: 'Adds a song to the server\'s queue',
  usage: 'add <youtube video URL/youtube video>'
};
