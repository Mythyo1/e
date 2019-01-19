exports.run = async (client, message, args, level) => {
  if (parseInt(isNaN(client.levels.get(message.guild.id+message.author.id)))) {
    message.channel.send('Your rank is not displayable. Sorry for the inconvinience.');
  } else {
    
    message.channel.send('Your ranks is ' + client.levels.get(message.guild.id+message.author.id)+'!')
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'User'
};

exports.help = {
  name: 'rank',
  category: 'General',
  description: 'Tells you your server rank.',
  usage: 'rank'
};
