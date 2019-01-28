const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  const user = message.mentions.users.first();
  const settings = client.getSettings(message.guild.id);
  
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member.kick(args.slice(1).join(' ')).then(() => {
        message.reply(`Successfully kicked ${user.tag}`);
      
        const modLogChannel = settings.modLogChannel;
        if (modLogChannel && message.guild.channels.find(c => c.name === settings.modLogChannel)) {
          let embed = new Discord.RichEmbed()
          .setTitle('User Ban')
          .setColor('#eeeeee')
          .setDescription(`Name: ${user.username}\nID: ${user.id}\nReason: ${args.slice(1).join(' ')}`);

          message.guild.channels.find(c => c.name === settings.modLogChannel).send(embed).catch(console.error);        
        }
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
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'kick',
  category: 'Moderation',
  description: 'Kicks a member for an optional reason',
  usage: 'kick @<user> [reason]'
};
