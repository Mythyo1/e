const Discord = require('discord.js');
const cooled = new Discord.Collection();

module.exports = async (client, message) => {
  if (message.guild) {
    if (client.raids.has(message.guild.id)) {
      if (!message.member.hasPermission('BAN_MEMBERS')) message.delete().catch();
      else return;
    }
  }
  if (message.author.bot) return;
  if (client.config.blacklisted.includes(message.author.id)) return;
  
  let settings;
  
  if (message.guild) settings = client.getSettings(message.guild.id);
  else settings = client.config.defaultSettings;

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix on this guild is \`${settings.prefix}\``);
  }
  
  let args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  let command = args.shift().toLowerCase();
  
  if (message.guild) {
    if (client.tags.has(message.guild.id)) {
      Object.keys(client.tags.get(message.guild.id)).forEach(tagid => {
        let tag = client.tags.get(message.guild.id)[tagid];
        
        if (message.content == tag.name) message.channel.send(tag.text.replace('@user', '<@' + message.author.id + '>'));
      });
    }
  }
  
  if (message.content.toLowerCase().indexOf(settings.prefix.toLowerCase()) !== 0) return;
  
  

  let level = client.permlevel(message);

  let cmd = client.commands.get(command) || client.aliases.get(command);

  if (!client.commands.has(command) && !client.aliases.has(command)) return;
  
  if (cooled.get(message.author.id)) return message.react('⏳');
  if (client.permlevel(message) < 6) {
    cooled.set(message.author.id, true);
    setTimeout(async () => {
      cooled.delete(message.author.id);
    }, 3000);
  }
  if (!message.guild && cmd.conf.guildOnly) return message.channel.send('This command is unavailable via private message. Please run this command in a guild.');

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
