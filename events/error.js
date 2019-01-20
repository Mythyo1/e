module.exports = async (client, error) => {
  client.logger.log(`DJS \n\t${JSON.stringify(error)}`, 'error');
};
