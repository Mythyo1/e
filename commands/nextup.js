const Discord = require('discord.js');
const { getInfo } = require('ytdl-getinfo');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!client.music[message.guild.id]) {
      client.music[message.guild.id] = {queue: [], loop: false};
    }

    var server = client.music[message.guild.id];
    if (!server.queue[0]) return message.channel.send('There is nothing next in the queue!');
    else {
      let res;
      let msg = await message.channel.send('Searching youtube...');
      
      if (!server.queue[1]) res = await getInfo(server.queue[0]);
      if (server.queue[1]) res = await getInfo(server.queue[server.queue.length-1]);
      
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
