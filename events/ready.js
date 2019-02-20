module.exports = async client => {
  const statusList = [
    {msg: `for commands | ${client.config.defaultSettings.prefix}help`, type: 'WATCHING'},
    {msg: `with async/await errors | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `bitch lasagnia | ${client.config.defaultSettings.prefix}help`, type: 'LISTENING'},
    {msg: `PewDiePie | ${client.config.defaultSettings.prefix}help`, type: 'WATCHING'},
    {msg: `with unhandled promise rejections | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `with linux permissions | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `minecraft... MOM GET OUT OF MY ROOM IM PLAYING MINECRAFT | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `Discord be slow | ${client.config.defaultSettings.prefix}help`, type: 'WATCHING'}
  ];
  
  setInterval(async () => {
    let index = Math.floor(Math.random() * statusList.length + 1) - 1;
    await client.user.setActivity(statusList[index].msg, {type: statusList[index].type});
  }, 5000);
  
  //Starts the web server/API
  require('../modules/api')(client);
  require('../modules/botlist')(client);
  
  //Logs the Status
  client.logger.log(`Ram Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, 'ready');
  client.logger.log(`Users: ${client.users.size.toLocaleString()}`, 'ready');
  client.logger.log(`Servers: ${client.guilds.size.toLocaleString()}`, 'ready');
  client.logger.log(`Channels: ${client.channels.size.toLocaleString()}`, 'ready');
  client.logger.log(`Discord.js: v${require('discord.js').version}`, 'ready');
  client.logger.log(`Node.js: ${process.version}`, 'ready');
};
