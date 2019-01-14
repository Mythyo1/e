const Discord = require('discord.js');

exports.run = (client, message, args, level) => {
  if (!args[0]) {
    const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";
    let output = `\nUse ${message.settings.prefix}help <command> for details\n`;
    const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    sorted.forEach( c => {
      const cat = c.help.category.toProperCase();
      if (currentCategory !== cat) {
        output += `\u200b\n${cat} Commands\n`;
        currentCategory = cat;
      }
      output += `${message.settings.prefix}${c.help.name}: ${c.help.description}\n`;
    });
    
    const embed = new Discord.RichEmbed()
    .setTitle('Cytrus Help')
    .setDescription(output)
    .setColor('#eeeeee');
    
    message.channel.send(embed);
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      if (level < client.levelCache[command.conf.permLevel]) return;
      const embed = new Discord.RichEmbed()
      .setTitle(command.help.name)
      .setDescription(`${command.help.description}\nUsage: ${command.help.usage}\nAliases: ${command.conf.aliases.join(", ")}`)
      .setColor('#eeeeee');
      
      message.channel.send(embed);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h"],
  permLevel: "User"
};

exports.help = {
  name: "help",
  category: "General",
  description: "Displays all the available commands for your permission level.",
  usage: "help [command]"
};
