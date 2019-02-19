const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let msg = await message.channel.send('Logging out...');
    
    client.destroy();
    client.login(process.env.BOT_TOKEN);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'Bot Support'
};

exports.help = {
  name: 'relog',
  category: 'System',
  description: 'Logs out then back in to discord',
  usage: 'relog'
};
