const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars-
  try {
    var server = client.music[args[0]] || client.music[message.guild.id];

    let output = '';
    if (server) {
      if (server.queue) {
        server.queue.forEach((song) => {
          output += song + '\n';
        });
        let embed = new Discord.RichEmbed()
        .setTitle('Queue')
        .setDescription(output)
        .setColor('#eeeeee');

        message.channel.send(embed);
      } else {
        message.channel.send('Their is nothing in the queue!');
      }
    } else {
      message.channel.send('Their is nothing in the queue!');
    }
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'queue',
  category: 'Music',
  description: 'Returns the servers queue',
  usage: 'queue [guild ID]'
};
