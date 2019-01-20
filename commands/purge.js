exports.run = async (client, message, args, level) => {
  let num;
  
  if (!isNaN(args)) {
    num = parseInt(args[0]);
    
    if (num >= 100 && num && num !== 0) {
      message.reply('You must enter a number under 100 for me to clear!');
    } else {
      message.channel.bulkDelete(num + 1);
    }
  } else {
    message.reply('You must enter a number under 100 for me to clear!');
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear', 'c'],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'purge',
  category: 'Moderation',
  description: 'Purges the amount of messages you specify',
  usage: 'purge <1-99>'
};