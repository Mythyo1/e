exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let i = [];
    
    if (!message.mentions.members.first()) message.guild.members.forEach(member => {
      if (!member.user.bot) i.push(member);
    });
    else i.push(message.mentions.members.first());

    let member = i.random();
    await message.channel.send(new client.Embed('normal', {
      title: 'Love',
      description: message.author.username + ' is  ' + Math.floor(Math.random() * 100 + 1) + '% in love with ' + member.user.username
    }));
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'love',
  category: 'Fun',
  description: 'Shows how much in love tou are with a user',
  usage: 'love [user]'
};
