exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send('Ive created the channel!').then(() => {
    message.guild.createChannel(args[0], args[1], []).catch((err) => {
      message.channel.send('Their was an error!')
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cr'],
  permLevel: 'Administrator'
};

exports.help = {
  name: 'create',
  category: 'Moderation',
  description: 'Creates a channel in the server.',
  usage: 'create <name> <voice, text>'
};
