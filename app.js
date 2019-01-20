//Check if the node version is 8.0.0+
if (Number(process.version.slice(1).split('.')[0]) < 8) throw new Error('NodeJS 8.0.0 or higher is required. Re-run this with NodeJS 8.0.0+');

//Define NPM modules
const fs = require('fs');
const Enmap = require('enmap');
const Discord = require('discord.js');
const util = require('util');

//Define variubles
const client = new Discord.Client();
const promisify = util.promisify;
const readdir = (fs.readdir);
process.env.DEBUG = true;

//Define databases
client.commands = new Enmap();
client.aliases = new Enmap();
client.levels = new Enmap({name: 'levels'});
client.spotify = new Enmap({name: 'spotify'});
client.settings = new Enmap({name: 'settings'});

//Import files
const initWeb = require('./modules/web');
require('./modules/functions')(client);
client.config = require('./cnf');
client.logger = require('./modules/Logger');

//Get command files
readdir("./commands/", (err, files) => {
  //If their is an error, Return the error
  if (err) return client.logger.error(err);
  
  //For each file in the file array run this function
  files.forEach((file) => {
    //If the file extention (.py, .js, .md) is not js, Ignore it
    if (!file.endsWith(".js")) return;
    
    //Make the "props" variuble the file object
    let props = require(`./commands/${file}`);
    
    //Split the file name from the file extention
    let commandName = file.split(".")[0];
    
    //Log that the command is loading
    client.logger.log(`Loading command: ${commandName}`);
    
    //Set the command name the file objects
    client.commands.set(commandName, props);
    props.conf.aliases.forEach((al) => {
      //Set the aliases of the command the file objects
      client.aliases.set(al, props);
    });
  });
  console.log();
});

//Get event files
readdir("./events/", (err, files) => {
  //If their is an error, Return the error
  if (err) return client.logger.error(err);
  
  //For each file in the file array run this function
  files.forEach(file => {
    //If the file extention (.py, .js, .md) is not js, Ignore it
    if (!file.endsWith(".js")) return;
    
    //Make the "event" variuble the file object
    const event = require(`./events/${file}`);
    
    //Split the file name from the file extention
    let eventName = file.split(".")[0];
    
    //When the event name is ran, Run the event files objects
    client.on(eventName, event.bind(null, client));
    
    //Delete the event cache
    delete require.cache[require.resolve(`./events/${file}`)];
    
    //Log that the event is loading
    client.logger.log(`Loading event: ${eventName}`)
  });
  console.log();
});

//Cache the permissions
client.levelCache = {};
for (let i = 0; i < client.config.permLevels.length; i++) {
  const thisLevel = client.config.permLevels[i];
  client.levelCache[thisLevel.name] = thisLevel.level;
}
  
//Login to discord
client.login(process.env.BOT_TOKEN).then(initWeb());