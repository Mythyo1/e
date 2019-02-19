const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let res = await client.awaitReply(message, `Are you sure you want to nick everyone in your server to \`${args.join(' ')}\`?`);
    
    if (['y', 'yes'].includes(res)) {
      let msg = await message.channel.send('Nicking members...');
      
      message.guild.members.forEach(member => member.setNickname(args.join(' ')).catch(err => message.channel.send('I couldent nick ' + member.user.tag + '!\n' + err)));
      msg.edit('Done!');
    } else return message.channel.send('Ok! Aborted.');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'Administrator'
};

exports.help = {
  name: 'massnick',
  category: 'General',
  description: 'Nicks everyone in the server to the specified nickname',
  usage: 'massnick <nickname>'
};
