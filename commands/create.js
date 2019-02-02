exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.channel.send('I\'ve created the channel!').then(() => {
      message.guild.createChannel(args[1], args[0], []).catch((err) => {
        message.channel.send('There was an error!')
      });
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['cr'],
  guildOnly: true,
  permLevel: 'Administrator'
};

exports.help = {
  name: 'create',
  category: 'Moderation',
  description: 'Creates a channel in the server.',
  usage: 'create <voice, text> <name>'
};
