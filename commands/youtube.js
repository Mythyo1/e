const Discord = require('discord.js');
const { YTSearcher } = require('ytsearcher');

const searcher = new YTSearcher(process.env.YOUTUBE_API_KEY);

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let msg = await message.channel.send('Searching YouTube...');
    
    searcher.search(args.join(' ')).then(info => {
      let embed = new Discord.RichEmbed()
      .setTitle(info.first.title)
      .setDescription(info.first.url)
      .setColor('#eeeeee');
      
      msg.edit(embed);
    });

  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['yt'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'youtube',
  category: 'General',
  description: 'Returns info about a youtube video',
  usage: 'youtube <video name>'
};
