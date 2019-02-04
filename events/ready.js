const initWeb = require('../modules/web');
module.exports = async client => {
  const statusList = [
    {msg: `commands :3 | ${client.config.defaultSettings.prefix}help`, type: 'LISTENING'},
    {msg: `with async/await errors | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `with linux commands | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `to bitch lasagnia | ${client.config.defaultSettings.prefix}help`, type: 'LISTENING'},
    {msg: `PewDiePie | ${client.config.defaultSettings.prefix}help`, type: 'WATCHING'},
    {msg: `with unhandled promise rejections | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `cytrus.ga | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `minecraft... MOM GET OUT OF MY ROOM IM PLAYING MINECRAFT | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'}
  ]
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, 'ready');
  setInterval(async () => {
    let index = Math.floor(Math.random() * (statusList.length - 1) + 1)
    await client.user.setActivity(statusList[index].msg, {type: statusList[index].type});
  }, 5000);
  
  //Starts the web server/API
  initWeb();
  
  //Logs the Status
  client.logger.log(`Ram Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`);
  client.logger.log(`Users: ${client.users.size.toLocaleString()}`);
  client.logger.log(`Servers: ${client.guilds.size.toLocaleString()}`);
  client.logger.log(`Channels: ${client.channels.size.toLocaleString()}`);
  client.logger.log(`Discord.js: v${require('discord.js').version}`);
  client.logger.log(`Node.js: ${process.version}`);
};
