exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    client.money.ensure(message.author.id, {
      money: 0,
      stone: 250
    });
    
    let money = client.money.get(message.author.id, 'money');
    let stone = client.money.get(message.author.id, 'stone');
    message.channel.send(`You have \$${money}
and ${stone} stone`);
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
  name: 'money',
  category: 'Money',
  description: 'Returns how much money you have',
  usage: 'money'
};