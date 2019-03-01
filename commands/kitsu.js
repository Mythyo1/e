const Discord = require('discord.js');
const Kitsu = require('node-weeb').anime;

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.reply('You need to supply the anime to search!');
    
    let msg = await message.channel.send('Searching Kitsu..');
    let output = '';
    let i = 1;
    
    Kitsu(args.join(' ')).then(async res => {
      JSON.parse(res).data.forEach((anime) => {
        let title = anime.attributes.titles.en || 'Title not found';
        output += '\n' + i + '. ' + title;
        i++;
      });
      
      let animenum = await client.awaitReply(message, `Please choose the anime you want.${output}`);
      if (isNaN(animenum)) return message.reply('Thats not a number!');
      
      let anime = JSON.parse(res).data[animenum - 1];
      
      if (!anime) return message.reply('I couldent find any Anime with your search term!');
      let embed = new Discord.RichEmbed()
      .setTitle(anime.attributes.titles.en || 'Title not found')
      .setURL('https://kitsu.io/anime' + anime.id)
      .setDescription(anime.attributes.synopsis)
      .addField('Ages', anime.attributes.ageRatingGuide, true)
      .addField('Status', anime.attributes.status, true)
      .addField('NSFW', anime.attributes.nsfw)
      .setThumbnail(anime.attributes.posterImage.medium)
      .setColor('#eeeeee');
      msg.edit(embed);
    });

  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['anime', 'kitsuio', 'k'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'kitsu',
  category: 'Weeb',
  description: 'Searches Kitsu for your anime',
  usage: 'kitsu <anime>'
};
