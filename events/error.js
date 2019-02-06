module.exports = async (client, error) => {
  client.logger.log(`${error.message}`, 'error');
};
