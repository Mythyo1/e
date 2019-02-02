const Discord = require('discord.js');

module.exports = (client, message) => {
  if (message.bot) return;
  
  let settings = client.getSettings(message.guild.id);
  if (settings.logMessageDeletions == 'true') {
    let embed = new Discord.RichEmbed()
    .setTitle('Message Delete')
    .setTimestamp(new Date())
    .setDescription('**Message deleted by**\n' + message.author.tag + '\n\n**Message**\n' + message.content)
    .setColor('#eeeeee');

    if (message.guild.channels.find(channel => channel.name == settings.modLogChannel)) {
      message.guild.channels.find(channel => channel.name == settings.modLogChannel).send(embed).catch();
    }
  }
};
