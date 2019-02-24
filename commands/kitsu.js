const Discord = require('discord.js');
const Kitsu = require('node-weeb').anime;

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.reply('You need to supply the anime to search!');
    
    const msg = await message.channel.send('Searching Kitsu..');

    Kitsu(args.join(' ')).then(res => {
      let anime = JSON.parse(res).data[0];
      let embed = new Discord.RichEmbed()
      .setTitle(anime.attributes.titles.en)
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
  aliases: ['anime', 'kitsuio'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'kitsu',
  category: 'Weeb',
  description: 'Searches Kitsu for your anime',
  usage: 'kitsu <anime>'
};
