module.exports = async (client, warn) => {
  client.logger.log(`${warn.message}`, 'warn');
};
