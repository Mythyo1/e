//Check if the node version is 8.0.0+
if (Number(process.version.slice(1).split('.')[0]) < 8) throw new Error('NodeJS 8.0.0 or higher is required. Re-run this with NodeJS 8.0.0+');

//Define NPM modules
const fs = require('fs');
const Enmap = require('enmap');
const Discord = require('discord.js');
const util = require('util');

//Define client
const client = new Discord.Client({
  disableEveryone: true
});

//Define databases/objects
client.commands = new Enmap();
client.aliases = new Enmap();
client.liusers = new Enmap();
client.logins = new Enmap({name: 'logins'});
client.spotify = new Enmap({name: 'spotify'});
client.settings = new Enmap({name: 'settings'});
client.tickets = new Enmap({name: 'supporttickets'});
client.warns = new Enmap({name: 'warns'});
client.levelCache = {};
client.music = {};

//Define variubles
const promisify = util.promisify;
const readdir = (fs.readdir);

//Import files
require('./modules/commands')(client, readdir);
require('./modules/events')(client, readdir);
require('./modules/functions')(client);
client.config = require('./cnf');
client.logger = require('./modules/Logger');
client.token = client.config.token;

//Cache the permissions
for (let i = 0; i < client.config.permLevels.length; i++) {
  const thisLevel = client.config.permLevels[i];
  client.levelCache[thisLevel.name] = thisLevel.level;
}

//Login to discord
client.login(process.env.BOT_TOKEN);
