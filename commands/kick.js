exports.run = async (client, message, args, level) => {
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member.kick(args.join(' ')).then(() => {
        message.reply(`Successfully kicked ${user.tag}`);
      }).catch(err => {
        message.reply('I was unable to kick the member');
      });
    } else {
      message.reply('That user isn\'t in this guild!');
    }
  } else {
    message.reply('You didn\'t mention the user to kick!');
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'kick',
  category: 'Moderation',
  description: 'Kicks a member for an optional reason',
  usage: 'kick @<user> [reason]'
};
