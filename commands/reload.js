exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  if (!args || args.length < 1) return message.reply("Must provide a command to reload!");

  let response = await client.unloadCommand(args[0]);
  if (response) return message.reply(`Error Unloading: ${response}`);

  response = client.loadCommand(args[0]);
  if (response) return message.reply(`Error Loading: ${response}`);

  message.reply(`The command \`${args[0]}\` has been reloaded`);
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: "Bot Developer"
};

exports.help = {
  name: "reload",
  category: "System",
  description: "Reloads a command.",
  usage: "reload <command>"
};