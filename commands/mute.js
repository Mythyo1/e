const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  const user = message.mentions.users.first();
  const settings = client.getSettings(message.guild.id);

  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member.addRole(message.guild.roles.find(r => r.name == settings.muteRole)).then(() => {
        message.reply(`Successfully muted ${user.tag}`);
        
        const modLogChannel = settings.modLogChannel;
        
        let embed = new Discord.RichEmbed()
        .setTitle('User Mute')
        .setColor('#eeeeee')
        .setDescription(`Name: ${user.username}\nID: ${user.id}`);
        
        message.guild.channels.find(c => c.name === settings.modLogChannel).send(embed).catch(console.error);
      }).catch(err => {
       message.reply('I was unable to mute the member');
      });
    } else {
      message.reply('That user isn\'t in this guild!');
    }
  } else {
    message.reply('You didn\'t mention the user to unmute!');
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['m'],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'mute',
  category: 'Moderation',
  description: 'Mutes a member.',
  usage: 'mute @<user>'
};
