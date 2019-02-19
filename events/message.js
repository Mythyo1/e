module.exports = async (client, message) => {
  if (message.guild) {
    if (message.author.bot && !client.raids.has(message.guild.id)) return;
    if (client.config.blacklisted.includes(message.author.id) && !client.raids.has(message.guild.id)) return;
  } else {
    if (message.author.bot) return;
    if (client.config.blacklisted.includes(message.author.id)) return;
  }
  
  if (message.content.toLowerCase() == 'f') return message.channel.send(message.author.username + ' has payed their respects!');
  if (message.content.toLowerCase() == 'night' || message.content.toLowerCase() == 'gn') return message.channel.send('Good night!');
  if (message.content.toLowerCase() == 'morning') return message.channel.send('Good morning!');

  let settings;
  let args;

  if (message.guild) settings = client.getSettings(message.guild.id);
  else settings = client.config.defaultSettings;

  if (message.guild) {
    let aliraid = [settings.prefix + 'unraid', settings.prefix + 'unmutechat', settings.prefix + 'uc'];
    if (client.raids.has(message.guild.id) && !aliraid.includes(message.content)) return message.delete().catch();
  }


  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix on this guild is \`${settings.prefix}\``);
  }

  if (message.content.indexOf(settings.prefix) !== 0) return;
  
  args = message.content.slice(settings.prefix.length).trim().split(/ +/g);

  let command = args.shift().toLowerCase();
  let level = client.permlevel(message);

  let cmd = client.commands.get(command) || client.aliases.get(command);
  if (!cmd) return message.channel.send(command+' is not a command! Use ' + settings.prefix + 'help for help.');

  if (cmd && !message.guild && cmd.conf.guildOnly) return message.channel.send('This command is unavailable via private message. Please run this command in a guild.');

  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.noPermissionNotice === 'true') return message.channel.send(`You do not have permission to use this command.
Your permission level is ${level} (${client.config.permLevels.find(l => l.level === level).name})
This command requires level ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
    else return;
  }

  message.author.permLevel = level;

  message.flags = [];
  while (args[0] && args[0][0] === '-') {
    message.flags.push(args.shift().slice(1));
  }

  if (!cmd.conf.enabled === true) return;
   
  try {
    cmd.run(client, message, args, level);
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};
