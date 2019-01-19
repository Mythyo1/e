const fs = require('fs');
const Discord = require('discord.js');
const util = require('util');
const promisify = util.promisify;
const readdir = promisify(require('fs').readdir);
const client = new Discord.Client();
client.logger = require('./Logger');
const Enmap = require('enmap');

client.levels = new Enmap({name: 'levels'});
client.commands = new Enmap({name: 'commands'});
client.aliases = new Enmap({name: 'aliases'});
client.spotify = new Enmap({name: 'spotify'});
client.settings = new Enmap({name: 'settings'});

//Get command files
const cmdFiles = readdir('../commands/');
cmdFiles.forEach(f => {
  if (!f.endsWith('.js')) return;
  const response = client.loadCommand(f);
  if (response) console.log(response);
});
console.log();

//Get event files
const evtFiles = readdir('../events/');
client.logger.log(`Loading a total of ${evtFiles.length} events.`);
evtFiles.forEach(file => {
  const eventName = file.split('.')[0];
  client.logger.log(`Loading Event: ${eventName}`);
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
});
console.log();

//Cache the permissions
client.levelCache = {};
for (let i = 0; i < client.config.permLevels.length; i++) {
  const thisLevel = client.config.permLevels[i];
  client.levelCache[thisLevel.name] = thisLevel.level;
}

client.spotify.set('rap', 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd');
client.spotify.set('games', 'https://open.spotify.com/playlist/5bzUd5ygYq9iiGvSUfxmDN');
client.spotify.set('memes', 'https://open.spotify.com/playlist/6dexJqtAIi8A2Mi35g6GfT');
client.spotify.set('dubstep', 'https://open.spotify.com/playlist/1A7pY65wgTarJ85of9M981');
client.spotify.set('catchy', 'https://open.spotify.com/playlist/0u82M1UonGIU8QuCOXDJYu');
client.spotify.set('nightcore', 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4d9PxK');
  
//Login to discord
client.login(process.env.BOT_TOKEN);