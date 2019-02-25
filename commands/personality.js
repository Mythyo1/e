const Discord = require('discord.js');
const types = ['Psychopath', 'Depressed', 'Cheerful', 'Bright', 'Dark', 'God', 'Deceiver', 'Funny', 'Fishy', 'Cool', 'Insecure', 'Lonely', 'Optimistic', 'Brave', 'Brilliant', 'Dreamer', 'Nurturer', 'Peaceful', 'Overthinker', 'Idealist'];
const social = ['Loser', 'The nice guy', 'Dank memer', 'Nerd'];
const hobbys = ['Art', 'Drawing', 'Painting', 'Singing', 'Writing', 'Anime', 'Memes', 'Minecraft', 'Subscribing to PewDiePie from alt accounts', 'Deleting T-Series'];
const genres = ['Nightcore', 'Heavy Metal', 'Alternative', 'Electronic', 'Classical', 'Dubstep', 'Jazz', 'Pop', 'Rap'];

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let user = message.mentions.members.first() || message.author;
    
    let embed = new Discord.RichEmbed()
    .setTitle('Personality')
    .setThumbnail(user.avatarURL)
    .setAuthor(user.username + '\'s personality')
    .addField('Type', types[Math.floor(Math.random() * types.length + 1) - 1])
    .addField('Social Status', social[Math.floor(Math.random() * social.length + 1) - 1])
    .addField('Hobby', hobbys[Math.floor(Math.random() * hobbys.length + 1) - 1])
    .addField('Music Genre', genres[Math.floor(Math.random() * genres.length + 1) - 1])
    .setColor('#eeeeee');

    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'personality',
  category: 'General',
  description: 'Returns your Personality',
  usage: 'personality'
};
