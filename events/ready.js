const initWeb = require('../modules/web');

module.exports = async client => {
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, 'ready');

  client.user.setActivity(`commands :3 | ${client.config.defaultSettings.prefix}help`, {type: 'LISTENING'}).then(initWeb());
};
