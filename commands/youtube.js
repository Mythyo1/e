const Discord = require('discord.js');
const { getInfo } = require('ytdl-getinfo');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let msg = await message.channel.send('Searching YouTube...');
    
    getInfo(args.join(' '), ['--default-search=ytsearch']).then(info => {
      let embed = new Discord.RichEmbed()
      .setTitle(info.items[0].title)
      .setThumbnail(info.items[0].thumbnail)
      .setDescription(info.items[0].webpage_url)
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
