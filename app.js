//Check if the node version is 8.0.0+
if (Number(process.version.slice(1).split('.')[0]) < 8) throw new Error('NodeJS 8.0.0 or higher is required. Re-run this with NodeJS 8.0.0+');

//Define NPM modules
const fs = require('fs');
const Enmap = require('enmap');
const Discord = require('discord.js');
const util = require('util');

//Define variubles
const client = new Discord.Client();
require('./modules/web');
require('./modules/functions')(client);
client.config = require('./cnf');
client.logger = require('./modules/Logger');
const promisify = util.promisify;
const readdir = fs.readdir;

//Define databases
client.levels = new Enmap({name: 'levels'});
client.commands = new Enmap();
client.aliases = new Enmap();
client.spotify = new Enmap();
client.settings = new Enmap({name: 'settings'});

//Get command files
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.logger.log(`Loading command: ${commandName}`);
    client.commands.set(commandName, props);
  });
  console.log();
});

//Get event files
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
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
client.login(process.env.BOT_TOKEN);

setTimeout(() => {
  client.spotify.set('rap', 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd');
  client.spotify.set('games', 'https://open.spotify.com/playlist/5bzUd5ygYq9iiGvSUfxmDN');
  client.spotify.set('memes', 'https://open.spotify.com/playlist/6dexJqtAIi8A2Mi35g6GfT');
  client.spotify.set('dubstep', 'https://open.spotify.com/playlist/1A7pY65wgTarJ85of9M981');
  client.spotify.set('catchy', 'https://open.spotify.com/playlist/0u82M1UonGIU8QuCOXDJYu');
  client.spotify.set('nightcore', 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4d9PxK');
}, 3000);