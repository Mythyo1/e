const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    let members = [];
    const settings = client.getSettings(message.guild.id);
    message.guild.members.forEach(async (member) => {
      if (client.config.globalBan.includes(member.id)) members.push(member.id);
    });
    
    let msg = await message.channel.send('Banning members...');
    members.forEach(async (id) => {
      message.guild.members.find(member => member.id == id).ban('Detected by Cytrus Global Ban List').then(() => {
        const modLogChannel = settings.modLogChannel;
        if (modLogChannel && message.guild.channels.find(c => c.name === settings.modLogChannel)) {
          let embed = new Discord.RichEmbed()
          .setTitle('User Ban')
          .setColor('#eeeeee')
          .setDescription(`ID: ${id}\nReason: Detected by the Cytrus Global Ban List\nModerator: ${message.author.username}`);

          message.guild.channels.find(c => c.name === settings.modLogChannel).send(embed);
        }
      }).catch(err => {
        message.reply('Unable to ban the user with a ID of ' + id);
      });
    });
      
    msg.edit('Done!');
    
    if (!members[0]) {
      message.reply('The server is all clean!');
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'Administrator'
};

exports.help = {
  name: 'check',
  category: 'Moderation',
  description: 'Checks if anyone in your server is on the Cytrus Global Ban List',
  usage: 'check [ban]'
};
