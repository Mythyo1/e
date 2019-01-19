const Discord = require('discord.js');

module.exports = (client, member) => {
  const settings = client.getSettings(member.guild.id);

  if (settings.welcomeEnabled !== 'true') return;

  const welcomeMessage = settings.welcomeMessage.replace('{{user}}', member.user.tag);

  member.guild.channels.find(c => c.name === settings.welcomeChannel).send(welcomeMessage).catch(console.error);

  if (client.config.globalBan.includes(member.id)) {
    member.ban('Detected by the Cytrus global ban system').then(async () => {
      const modLogChannel = settings.modLogChannel;
        
      let embed = new Discord.RichEmbed()
      .setTitle('User Ban')
      .setColor('#eeeeee')
      .setDescription(`Name: ${member.username}\nID: ${member.id}\nReason: Detected by Cytrus GlobalBanSystem`);

      await member.guild.channels.find(c => c.name === settings.modLogChannel).send(embed).catch(console.error);
    }).catch(console.error);
  }
};
