exports.run = async (client, message, args, level) => {
  try {
    let num;

    if (!isNaN(args)) {
      num = parseInt(args[0]);

      if (num >= 100 && num && num !== 0) {
        message.reply('You must enter a number at or under 100 for me to clear!');
      } else {
        message.channel.bulkDelete(1);
        message.channel.bulkDelete(num);
      }
    } else {
      message.reply('You must enter a number at or under 100 for me to clear!');
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['clear', 'c'],
  guildOnly: true,
  permLevel: 'Moderator'
};

exports.help = {
  name: 'purge',
  category: 'Moderation',
  description: 'Purges the amount of messages you specify',
  usage: 'purge <1-100>'
};