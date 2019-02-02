const Discord = require('discord.js');

exports.run = (client, message, args, level) => {
  try {
    // If no specific command is called, show all filtered commands.
    if (!args[0]) {
      // Filter all commands by which are available for the user's level, using the <Collection>.filter() method.
      const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);

      // Here we have to get the command names only, and we use that array to get the longest name.
      // This make the help commands 'aligned' in the output.
      const commandNames = myCommands.keyArray();
      const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

      let currentCategory = '';
      let output = `Use ${message.settings.prefix}help <command> for details\n\n`;
      const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
      sorted.forEach(c => {
        const cat = c.help.category;
        if (currentCategory !== cat) {
          output += `\u200b\n${cat} Commands\n`;
          currentCategory = cat;
        }
        output += `${c.help.name}: ${c.help.description}\n`;
      });

      let embed = new Discord.RichEmbed()
      .setTitle('Cytrus Help')
      .setColor('#eeeeee')
      .setFooter('Made by CelestialCrafter#0770 and EnderGirlGamer#5370')
      .setDescription(output);

      message.channel.send(embed);
    } else {
      // Show individual command's help.
      let command = args[0];
      if (client.commands.has(command)) {
        command = client.commands.get(command);
        if (level < client.levelCache[command.conf.permLevel]) return;

        let embedTiny = new Discord.RichEmbed()
        .setTitle(`${command.help.name}`)
        .setColor('#eeeeee')
        .setDescription(`${command.help.description}\nUsage: ${command.help.usage}\nAliases: ${command.conf.aliases.join(', ')}\n ${command.help.name} `);

        message.channel.send(embedTiny);
      }
    }
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['h'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'help',
  category: 'System',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};