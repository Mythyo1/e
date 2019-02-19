const Discord = require('discord.js');

module.exports = (client, message) => {
  if (client.selfrole.has(message.id)) client.selfrole.delete(message.id);
  if (message.author.bot) return;
  if (client.raids.has(message.guild.id)) return;
  
  let settings = client.getSettings(message.guild.id);
  if (settings.logMessageUpdates == 'true') {
    let embed = new Discord.RichEmbed()
    .setTitle('Message Delete')
    .setTimestamp(new Date())
    .setDescription('**Message created by**\n' + message.author.tag + '\n\n**Message**\n' + message.content)
    .setColor('#eeeeee');

    if (message.guild.channels.find(channel => channel.name == settings.modLogChannel)) {
      message.guild.channels.find(channel => channel.name == settings.modLogChannel).send(embed).catch();
    }
  }
};
