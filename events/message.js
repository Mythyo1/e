module.exports = async (client, message) => {
  if (message.author.bot) return;
  let settings;
  let args;

  if (message.guild) settings = client.getSettings(message.guild.id);
  else settings = client.config.defaultSettings;

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix on this guild is \`${settings.prefix}\``);
  }
  
  if (message.content.indexOf(settings.prefix) !== 0) return;

  args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  
  const command = args.shift().toLowerCase();
  const level = client.permlevel(message);

  const cmd = client.commands.get(command) || client.aliases.get(command);
  if (!cmd) return message.channel.send(command+' is not a command! Use ' + settings.prefix + 'help for help.');

  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send('This command is unavailable via private message. Please run this command in a guild.');

  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.noPermissionNotice === 'true') {
      return message.channel.send(`You do not have permission to use this command.
Your permission level is ${level} (${client.config.permLevels.find(l => l.level === level).name})
This command requires level ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
    } else {
      return;
    }
  }

  message.author.permLevel = level;
  
  message.flags = [];
  while (args[0] && args[0][0] === '-') {
    message.flags.push(args.shift().slice(1));
  }

  try {
    cmd.run(client, message, args, level);
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};