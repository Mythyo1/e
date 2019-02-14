const Discord = require('discord.js');
const { getInfo } = require('ytdl-getinfo');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!client.music[message.guild.id]) {
      client.music[message.guild.id] = {queue: [], loop: false, dispatcher: ''};
    }

    var server = client.music[message.guild.id];
    if (!server.dispatcher.song) return message.channel.send('There is nothing in the queue!');
    else {
      let msg = await message.channel.send('Searching Youtube...');
      let res = await getInfo(server.dispatcher.song);

      let embed = new Discord.RichEmbed()
      .setTitle(res.items[0].title)
      .setDescription(res.items[0].description)
      .setColor('#eeeeee')
      .setURL(res.items[0].url);

      msg.edit(embed);
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['np'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'nowplaying',
  category: 'Music',
  description: 'Returns the song playing now',
  usage: 'nowplaying'
};
