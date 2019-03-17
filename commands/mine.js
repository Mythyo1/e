const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    client.money.ensure(message.author.id, {
      money: 0,
      stone: 250
    });
    
    if (client.minecooldown.has(message.author.id)) return message.reply('You need to wait 10 minutes to mine again!');
    else client.minecooldown.set(message.author.id, true);
    
    setTimeout(async () => {
      client.minecooldown.delete(message.author.id);
    }, 600000);
    
    let stone = client.money.get(message.author.id, 'stone');
    client.money.set(message.author.id, stone + Math.floor(Math.random() * 100 + 1), 'stone');
    
    message.channel.send('You now have ' + client.money.get(message.author.id, 'stone') + ' stone!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'mine',
  category: 'Money',
  description: 'Mines stone for selling',
  usage: 'mine'
};