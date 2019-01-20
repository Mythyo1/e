module.exports = async (client, warn) => {
  client.logger.log(`DJS: \n\t${JSON.stringify(warn)}`, 'warn');
};
