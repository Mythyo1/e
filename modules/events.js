//Import modules
const fs = require('fs');
const util = require('util');

//Define variubles
const promisify = util.promisify;
const readdir = promisify(fs.readdir);

module.exports = (client) => {
  //Get event files
  readdir('/app/events/', (err, files) => {
    //If their is an error, Return the error
    if (err) return client.logger.error(err);

    //For each file in the file array run this function
    files.forEach(file => {
      //If the file extention (.py, .js, .md) is not js, Ignore it
      if (!file.endsWith('.js')) return;

      //Make the 'event' variuble the file object
      const event = require(`/app/events/${file}`);

      //Split the file name from the file extention
      let eventName = file.split('.')[0];

      //When the event name is ran, Run the event files objects
      client.on(eventName, event.bind(null, client));

      //Delete the event cache
      delete require.cache[require.resolve(`/app/events/${file}`)];

      //Log that the event is loading
      client.logger.log(`Loading event: ${eventName}`)
    });
    console.log();
  });
};