const Discord = require('discord.js');

module.exports = (client, user, userNew) => {
  let embed;
  let settings = client.getSettings(user.guild.id);
  
  if (!settings.logMemberUpdates == true) return;
  if (!settings.modLogChannel) return;
  if (!user.guild.channels.find(c => c.name == settings.modLogChannel)) return;
  
  let modLogChannel = user.guild.channels.find(c => c.name == settings.modLogChannel);
  
  if (user.user.nickname !== userNew.user.nickname) {
    embed = new Discord.RichEmbed()
    .setTitle('User Update')
    .setColor('#eeeeee')
    .setFooter(`Full name: ${userNew.user.tag} | ID: ${userNew.id}`)
    .setDescription(`Old User:
•Nickname: ${user.nickname}
New User:
•Nickname: ${userNew.nickname}`);
    
    modLogChannel.send(embed).catch();
  }
  
  if (user.user.tag !== userNew.user.tag) {
     embed = new Discord.RichEmbed()
    .setTitle('User Update')
    .setColor('#eeeeee')
    .setFooter(`Full name: ${userNew.user.tag} | ID: ${userNew.id}`)
    .setDescription(`Old User:
•Full name ${user.user.tag}
New User:
•Full name: ${userNew.user.tag}`);
    
    modLogChannel.send(embed).catch();
  }
  
  if (user.user.displayName !== userNew.user.displayName) {
    embed = new Discord.RichEmbed()
    .setTitle('User Display Name Update')
    .setColor('#eeeeee')
    .setFooter(`Full name: ${userNew.user.tag} | ID: ${userNew.id}`)
    .setDescription(`Old User:
•Display name: ${user.user.displayName}
New User:
•Display name: ${userNew.user.displayName}`);
    
    modLogChannel.send(embed).catch();
  }
  
  if (user.roles !== userNew.roles) {
    let output = '';
    let outputNew = '';
    
    user.roles.forEach(role => {
      output += '\n' + role.name;
    });
    
    userNew.roles.forEach(role => {
      outputNew += '\n' + role.name;
    });
    
    embed = new Discord.RichEmbed()
    .setTitle('User Roles Update')
    .setFooter(`Full name: ${userNew.user.tag} | ID: ${userNew.id}`)
    .setDescription(`
Old Roles${output}

New Roles${outputNew}`)
    .setColor('#eeeeee');
    
    modLogChannel.send(embed).catch();
  }
};