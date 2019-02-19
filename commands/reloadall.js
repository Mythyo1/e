exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  try {
    Array.from(client.commands.keys()).forEach(async key => {
      let response = await client.unloadCommand(key);
      if (response) return message.reply(`Error Unloading: ${response}`);

      response = client.loadCommand(key);
      if (response) return message.reply(`Error Loading: ${response}`);
      
      client.logger.log(`Reloading Command: ${key}`);
    });

    message.reply(`Reloaded ${client.commands.size + 1} commands`);
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['refreshall'],
  permLevel: 'Bot Developer'
};

exports.help = {
  name: 'reloadall',
  category: 'System',
  description: 'Reloads all command',
  usage: 'reloadall'
};