exports.run = (client, message, [command]) => {
  const Discord = require('discord.js');
  if (!command) {
    let fullHelp = new Discord.RichEmbed()
    .setColor('010310')
    .setTitle('Cytrus Commands')
    .setDescription('Do ' + client.config.prefix + '<command> to see what each command does.\n\nHelp\nPing\nIp\nReload\nSpotify');
    message.channel.send(fullHelp);
  }
  
  switch(command) {
    case 'ip':
      message.channel.send('Gets the Cytrus public IP adress.');
      break;
    case 'ping':
      message.channel.send('Gets the bot\'s ping.');
      break;
    case 'spotify':
      message.channel.send('Gets a spotify playlist of the song type you choose.');
      break;
    case 'reload':
      message.channel.send('Reloads a command.');
      break;
    case 'help':
      message.channel.send('Sends the help message');
      break;
    case 'reboot':
      message.channel.send('Reboots the bot');
      break;
  }
};