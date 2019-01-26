const Discord = require('discord.js');

module.exports = (client, member) => {
  let settings = client.getSettings(member.guild.id);

  if (settings.welcomeEnabled !== 'true') return;

  let welcomeMessage = settings.welcomeMessage.replace('{{user}}', member.user.tag);
  
  if (welcomeMessage && settings.welcomeChannel) {
    member.guild.channels.find(c => c.name == settings.welcomeChannel).send(welcomeMessage).catch();
  }

  if (client.config.globalBan.includes(member.id)) {
    member.ban('Detected by the Cytrus global ban system').then(async () => {
      let modLogChannel = settings.modLogChannel;
        
      if (modLogChannel) {
        let embed = new Discord.RichEmbed()
        .setTitle('User Ban')
        .setColor('#eeeeee')
        .setDescription(`Name: ${member.username}\nID: ${member.id}\nReason: Detected by Cytrus GlobalBanSystem`);

        await member.guild.channels.find(c => c.name === settings.modLogChannel).send(embed).catch(client.logger.error);
      }
    }).catch(console.error);
  }
};
