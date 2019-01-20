const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  const user = message.mentions.users.first();
  const settings = client.getSettings(message.guild.id);

  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member.ban(args.slice(1).join(' ')).then(() => {
        message.reply(`Successfully banned ${user.tag}`);
        
        const modLogChannel = settings.modLogChannel;
        if (modLogChannel) {
          let embed = new Discord.RichEmbed()
          .setTitle('User Ban')
          .setColor('#eeeeee')
          .setDescription(`Name: ${user.username}\nID: ${user.id}\nReason: ${args.slice(1).join(' ')}`);

          message.guild.channels.find(c => c.name === settings.modLogChannel).send(embed);
        }
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
  aliases: ['b'],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'ban',
  category: 'Moderation',
  description: 'Bans a member for an optional reason',
  usage: 'ban @<user> [reason]'
};
