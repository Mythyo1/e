//Check if the node version is 10.0.0+
if (Number(process.version.slice(1).split('.')[0]) < 10) throw new Error('NodeJS 10.0.0 or higher is required. Re-run this with NodeJS 10.0.0+');

//Define NPM modules
const Enmap = require('enmap');
const Discord = require('discord.js');

//Define client
const client = new Discord.Client({
  disableEveryone: true
});

//Define databases/objects
client.commands = new Enmap();
client.aliases = new Enmap();
client.liusers = new Enmap();
client.tags = new Enmap({name: 'tags'});
client.raids = new Enmap({name: 'raids'});
client.profiles = new Enmap({name: 'profiles'});
client.logins = new Enmap({name: 'logins'});
client.spotify = new Enmap({name: 'spotify'});
client.settings = new Enmap({name: 'settings'});
client.notes = new Enmap({name: 'notes'});
client.warns = new Enmap({name: 'warns'});
client.punchpower = new Enmap({name: 'punchpower'});
client.levelCache = {};
client.music = {};

//Import files
client.logger = require('./modules/Logger');
client.config = require('./cnf');
require('./modules/commands')(client);
require('./modules/events')(client);
require('./modules/functions')(client);

//Cache the permissions
for (let i = 0; i < client.config.permLevels.length; i++) {
  const thisLevel = client.config.permLevels[i];
  client.levelCache[thisLevel.name] = thisLevel.level;
}

//Login to discord
client.login(process.env.BOT_TOKEN);
