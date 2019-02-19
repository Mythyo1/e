const Discord = require('discord.js');
const { YTSearcher } = require('ytsearcher');

const searcher = new YTSearcher(process.env.YOUTUBE_API_KEY);

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!client.music[message.guild.id]) {
      client.music[message.guild.id] = {queue: [], loop: false};
    }

    var server = client.music[message.guild.id];
    if (!server.queue[0]) return message.channel.send('There is nothing next in the queue!');
    else {
      let msg = await message.channel.send('Searching youtube...');
      
      let res = await searcher.search(server.queue[server.queue.length -1]);
      
      let embed = new Discord.RichEmbed()
      .setTitle(res.first.title)
      .setDescription(res.first.description)
      .setColor('#eeeeee')
      .setURL(res.first.url);

      msg.edit(embed);
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['nu'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'nextup',
  category: 'Music',
  description: 'Returns the song playing next',
  usage: 'nextup'
};