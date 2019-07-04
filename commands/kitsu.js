const Kitsu = require('node-weeb').anime;

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.reply('You need to supply the anime to search!');
    
    let output = '';
    let i = 1;
    
    Kitsu(args.join(' ')).then(async res => {
      JSON.parse(res).data.forEach((anime) => {
        let title = anime.attributes.titles.en || 'Title not found';
        output += '\n' + i + '. ' + title;
        i++;
      });
      
      let animenum = await client.awaitReply(message, `Please choose the anime you want.${output}`);
      if (isNaN(animenum)) return message.reply('That\'s not a number!');
      
      let anime = JSON.parse(res).data[animenum - 1];
      
      if (!anime) return message.reply('I couldn\'t find any anime with your search term!');
      let embed = new client.Embed('normal', {
        title: anime.attributes.titles.en || 'Title not found',
        url: 'https://kitsu.io/anime' + anime.id,
        thumbnail: anime.attributes.posterImage.medium,
        fields: [
          {
            title: 'Ages',
            text: anime.attributes.ageRatingGuide,
            inline: true
          },
          {
            title: 'Status',
            text: anime.attributes.status,
            inline: true
          },
          {
            title: 'NSFW',
            text: anime.attributes.nsfw ? 'yes' : 'no'
          }
        ]
      });
      
      message.channel.send(embed);
    });

  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['anime', 'kitsuio', 'kit'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'kitsu',
  category: 'Weeb',
  description: 'Searches Kitsu for you.',
  usage: 'kitsu <animetitle>'
};
