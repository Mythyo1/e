const Discord = require('discord.js');

exports.run = (client, message, args, level) => {
  try {
    // If no specific command is called, show all filtered commands.
    if (!args[0]) {
      // Filter all commands by which are available for the user's level, using the <Collection>.filter() method.
      let myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level);

      // Here we have to get the command names only, and we use that array to get the longest name.
      // This make the help commands 'aligned' in the output.
      let commandNames = myCommands.keyArray();
      let longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

      let currentCategory = '';
      let output = `Use help <command> for details`;
      let sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
      sorted.forEach(c => {
        const cat = c.help.category;
        if (currentCategory !== cat) {
          if (level < client.levelCache[c.conf.permLevel]) return;
          
          
          output += `\n\n[${cat} Commands](https://cytrus.ga/commands.html)\n`;
          currentCategory = cat;
        }
        output += `\`${c.help.name}\` `;
      });
      
      let footer = '\n\n**[Website](https://cytrus.ga) | [Invite](https://discordapp.com/oauth2/authorize?client_id=' + client.user.id + '&scope=bot&permissions=8) | [Issues/Requests](https://github.com/CelestialCrafter/cytrus/issues)**';
      
      let embed = new Discord.RichEmbed()
      .setTitle('Cytrus Help')
      .setColor('#eeeeee')
      .setThumbnail(client.user.avatarURL)
      .setFooter('Made by CelestialCrafter#0770 and EnderGirlGamer#5370')
      .setDescription(output + footer);
      message.author.send(embed);
      message.react('✅');
    } else {
      // Show individual command's help.
      let command = args[0];
      if (client.commands.has(command) || client.aliases.has(command)) {
        command = client.commands.get(command) || client.aliases.get(command);

        let embedTiny = new Discord.RichEmbed()
        .setTitle(`${command.help.name}`)
        .setColor('#eeeeee')
        .setDescription(`${command.help.description}\nUsage: ${command.help.usage}\nAliases: ${command.conf.aliases.join(' | ')}`);

        message.author.send(embedTiny);
        message.react('✅');
      } else {
        let currentCategory = '';
        let output = '';
        let myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level);
        
        let sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
        sorted.forEach(c => {
          let cat = c.help.category;
          if (cat == args[0]) {
            if (level < client.levelCache[c.conf.permLevel]) return;
            output += `\`${c.help.name}\` `;
          }
        });
        
        if (!output) return message.reply('Thats not a command, alias, or category!');
        
        let embed = new Discord.RichEmbed()
        .setTitle('Cytrus Help')
        .setColor('#eeeeee')
        .setThumbnail(client.user.avatarURL)
        .setFooter('Made by CelestialCrafter#0770 and EnderGirlGamer#5370')
        .setDescription(output);
        
        message.author.send(embed);
        message.react('✅');
      }
    }
  } catch (err) {
    message.channel.send('Their was an error!\n' + err.stack).catch();
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