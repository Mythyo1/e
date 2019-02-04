const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let output = '';
    let i = 1;
    
    let confirm = await client.awaitReply(message, `There may be lots of DM's. Do you still want to list the bans?`);
    
    if (['cancel', 'n', 'no'].includes(confirm)) message.reply('Ok!\nCancled.');
    else {
      message.guild.fetchBans().then(async (bans) => {
        bans.forEach(async (ban) => {
          await message.author.send('**Name: ' + ban.tag + '** | **ID: ' + ban.id) + '**';
        });

        let msg = message.channel.send('The bans are in your DM\'s!');
      });
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['bans', 'banlist'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'listbans',
  category: 'Moderation',
  description: 'Returns the server\'s bans',
  usage: 'listbans'
};
