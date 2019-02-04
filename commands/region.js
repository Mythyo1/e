exports.run = async (client, message, args, level) => {
  try {
    if (!args[0]) {
      return message.reply('You need to specify a region!');
    } else {
      message.guild.setRegion(args[0]).catch(error => console.log(error));
      message.channel.send('Region Set');
    }
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'Administrator'
};

exports.help = {
  name: 'region',
  category: 'Moderation',
  description: 'Changes the servers region',
  usage: 'region <region>'
};
