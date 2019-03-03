module.exports = async client => {
  const statusList = [
    {msg: `for commands | ${client.config.defaultSettings.prefix}help | https://app.cytrus.ga`, type: 'WATCHING'},
    {msg: `with async/await errors | ${client.config.defaultSettings.prefix}help | https://app.cytrus.ga`, type: 'PLAYING'},
    {msg: `bitch lasagnia | ${client.config.defaultSettings.prefix}help | https://app.cytrus.ga`, type: 'LISTENING'},
    {msg: `PewDiePie | ${client.config.defaultSettings.prefix}help | https://app.cytrus.ga`, type: 'WATCHING'},
    {msg: `with unhandled promise rejections | ${client.config.defaultSettings.prefix}help | https://app.cytrus.ga`, type: 'PLAYING'},
    {msg: `with linux permissions | ${client.config.defaultSettings.prefix}help | https://app.cytrus.ga`, type: 'PLAYING'},
    {msg: `with my new web dashboard! | ${client.config.defaultSettings.prefix}help | https://app.cytrus.ga`, type: 'PLAYING'},
    {msg: `minecraft... MOM GET OUT OF MY ROOM IM PLAYING MINECRAFT | ${client.config.defaultSettings.prefix}help | https://app.cytrus.ga`, type: 'PLAYING'},
    {msg: `Discord be slow | ${client.config.defaultSettings.prefix}help | https://app.cytrus.ga`, type: 'WATCHING'}
  ];
  
  setInterval(async () => {
    let index = Math.floor(Math.random() * statusList.length + 1) - 1;
    await client.user.setActivity(statusList[index].msg, {
      type: statusList[index].type
    });
  }, 5000);
  
  client.user.setStatus('dnd');
  
  //Logs the Status
  client.logger.log(`Ram Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, 'ready');
  client.logger.log(`Users: ${client.users.size.toLocaleString()}`, 'ready');
  client.logger.log(`Servers: ${client.guilds.size.toLocaleString()}`, 'ready');
  client.logger.log(`Channels: ${client.channels.size.toLocaleString()}`, 'ready');
  client.logger.log(`Discord.js: v${require('discord.js').version}`, 'ready');
  client.logger.log(`Node.js: ${process.version}`, 'ready');
  client.logger.log('Cytrus V' + require('../package').version + ' | https://github.com/CelestialCrafter/cytrus');
    
  //Starts the web server/API
  require('../modules/web')(client);

  //Post stats to the bot list
  require('../modules/botlist')(client);
  
};
