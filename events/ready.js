const initWeb = require('../modules/web');
module.exports = async client => {
  const statusList = [
    {msg: `commands :3 | ${client.config.defaultSettings.prefix}help`, type: 'LISTENING'},
    {msg: `with async/await errors | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `with linux commands | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `to bitch lasagnia | ${client.config.defaultSettings.prefix}help`, type: 'LISTENING'},
    {msg: `PewDiePie | ${client.config.defaultSettings.prefix}help`, type: 'WATCHING'},
    {msg: `with unhandled promise rejections | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'},
    {msg: `cytrus.ga | ${client.config.defaultSettings.prefix}help`, type: 'PLAYING'}
  ]
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, 'ready');
  setInterval(async () => {
    let index = Math.floor(Math.random() * (statusList.length - 1) + 1)
    await client.user.setActivity(statusList[index].msg, {type: statusList[index].type});
  }, 5000);
  initWeb();
};
