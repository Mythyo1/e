module.exports = async (client, debug) => {
  if (process.env.DEBUG == true) {
    client.logger.log(`DJS\n\t${JSON.stringify(debug)}`, 'debug');
  } 
};
