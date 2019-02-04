//Check if the node version is 8.0.0+
if (Number(process.version.slice(1).split('.')[0]) < 8) throw new Error('NodeJS 8.0.0 or higher is required. Re-run this with NodeJS 8.0.0+');

//Define NPM modules
const fs = require('fs');
const Enmap = require('enmap');
const Discord = require('discord.js');
const util = require('util');

//Define client
const client = new Discord.Client();

//Define databases
client.commands = new Enmap();
client.aliases = new Enmap();
client.spotify = new Enmap({name: 'spotify'});
client.settings = new Enmap({name: 'settings'});

//Define variubles
const promisify = util.promisify;
const readdir = (fs.readdir);
client.levelCache = {};
client.music = {};
client.warns = new Enmap({name: 'warns'});
const startTimestamp = new Date();

//Define databases
client.commands = new Enmap();
client.aliases = new Enmap();
client.spotify = new Enmap({name: 'spotify'});
client.settings = new Enmap({name: 'settings'});

//Import files
require('./modules/commands')(client, readdir);
require('./modules/events')(client, readdir);
require('./modules/functions')(client);
client.config = require('./cnf');
client.logger = require('./modules/Logger');

//Cache the permissions
for (let i = 0; i < client.config.permLevels.length; i++) {
  const thisLevel = client.config.permLevels[i];
  client.levelCache[thisLevel.name] = thisLevel.level;
}

//Login to discord
client.login(process.env.BOT_TOKEN);
