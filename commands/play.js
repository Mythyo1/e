const ytdl = require('ytdl-core');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!client.music[message.guild.id]) client.music[messag.guild.id] = {dispatcher: null, queue: []};
    if (!client.music[message.guild.id].queue[0]) return message.reply('There is no music in the queue! Add music with cy.add');
    
    message.member.voiceChannel.join().then(connection => {
      client.music[message.guild.id].dispatcher = connection.playStream(ytdl(client.music[message.guild.id].queue[0], {filter: 'audioonly'}));
    });
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
  name: 'play',
  category: 'Music',
  description: 'Plays all music in queue',
  usage: 'play'
};