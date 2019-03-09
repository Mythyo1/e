exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let i = [];
    message.guild.members.forEach(member => {
      if (!member.user.bot) i.push(member.id);
    });

    let outputid = i[Math.floor(Math.random() * i.length + 1) - 1];
    await message.channel.send('<@'+outputid+'>');
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
  name: 'someone',
  category: 'Fun',
  description: 'Pings a random user',
  usage: 'someone'
};
