const request = require('request');

module.exports = async (client) => {
  if (!process.env.BOT_LIST_TOKEN) return;
  
  const options = {
    url: 'https://discordbotlist.com/api/bots/' + client.user.id + '/stats',
    json: {
      guilds: client.guilds.size,
      users: client.users.size,
      voice_connections: client.voiceConnections
    },
    headers: {
      Authorization: 'Bot ' + process.env.BOT_LIST_TOKEN
    }
  };
  
  request.post(options, (err, res, json) => {
    if (err) return client.logger.log('Error posting stats to Discord Bot List\n' + err);
    client.logger.log('Posted stats to Bot List');
  });
};