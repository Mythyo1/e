//Import modules
const fs = require('fs');
const util = require('util');

//Define variubles
const promisify = util.promisify;
const readdir = promisify(fs.readdir);

module.exports = (client) => {
  //Get command files
  let i = 1;
  
  readdir(__dirname + '/../commands/', (err, files) => {
    //If their is an error, Return the error
    if (err) return client.logger.error(err);

    //For each file in the file array run this function
    files.forEach((file) => {
      //If the file extention (.py, .js, .md) is not js, Ignore it
      if (!file.endsWith('.js')) return;

      //Make the "props" variuble the file object
      let props = require(`/app/commands/${file}`);

      //Split the file name from the file extention
      let commandName = file.split('.')[0];

      //Log that the command is loading
      client.logger.log(`Loading command: ${commandName}. Command ${i}`);

      //Set the command name the file objects
      client.commands.set(commandName, props);
      props.conf.aliases.forEach((al) => {
        //Set the aliases of the command the file objects
        client.aliases.set(al, client.commands.get(commandName));
      });
      
      i++;
    });
    
    console.log();
  });
};