exports.run = async (client, message, args, level) => {
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member.ban(args.join(' ')).then(() => {
        message.reply(`Successfully banned ${user.tag}`);
      }).catch(err => {
        message.reply('I was unable to ban the member');
      });
    } else {
      message.reply('That user isn\'t in this guild!');
    }
  } else {
    message.reply('You didn\'t mention the user to ban!');
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'ban',
  category: 'Moderation',
  description: 'Bans a member for an optional reason',
  usage: 'ban @<user> [reason]'
};
