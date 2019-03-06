exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  try {
    if (!args || args.length < 1) return message.reply('You must provide a command to reload!');

    let response = await client.unloadCommand(args[0]);
    if (response) return message.reply(`Error Unloading: ${response}`);

    response = client.loadCommand(args[0]);
    if (response) return message.reply(`Error Loading: ${response}`);

    client.logger.log(`Reloading Command: ${args[0]}`);
    message.reply(`The command \`${args[0]}\` has been reloaded`);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['refresh'],
  permLevel: 'Bot Moderator'
};

exports.help = {
  name: 'reload',
  category: 'System',
  description: 'Reloads a command',
  usage: 'reload [command]'
};