'use strict';

//Check if the node version is 10.0.0+
if (Number(process.version.slice(1).split('.')[0]) < 10) throw new Error('NodeJS 10.0.0 or higher is required. Re-run this with NodeJS 10.0.0+');

if (process.env.PREBOOT) eval(process.env.PREBOOT);

//Define NPM modules
const Enmap = require('enmap');
const Discord = require('discord.js');

//Define client
const client = new Discord.Client({
  disableEveryone: true,
  disabledEvents: ['TYPING_START']
});

//Define time of Startup
client.startup = new Date().getTime();

//Define Databases/Objects
client.items = new Enmap({name: 'glptmitems'});
client.money = new Enmap({name: 'glptm'});
client.raids = new Enmap({name: 'raids'});
client.profiles = new Enmap({name: 'profiles'});
client.logins = new Enmap({name: 'logins'});
client.spotify = new Enmap({name: 'spotify'});
client.settings = new Enmap({name: 'settings'});
client.notes = new Enmap({name: 'notes'});
client.bugs = new Enmap({name: 'bugreports'});
client.starboard = new Enmap({name: 'starboardmid'});
client.warns = new Enmap({name: 'warns'});
client.tags = new Enmap({name: 'tags'});
client.minecooldown = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.liusers = new Discord.Collection();
client.levelCache = {};
client.music = {};

//Define Nekos.life API
const NekosLifeAPI = require('nekos.life');
client.nekoslife = new NekosLifeAPI();

//Define Lolis.life API
const LolisLifeAPI = require('lolis.life');
client.lolislife = new LolisLifeAPI();

//Generate Session secret
process.env.SESSION_SECRET = '';
for (let i = 0; i <= 1000; i++)
  process.env.SESSION_SECRET += Math.random()
  .toString(16)
  .slice(2, 8)
  .toUpperCase()
  .slice(-6);

//Import files
client.logger = require('./modules/Logger');
client.config = require('./cnf');
require('./modules/commands')(client);
require('./modules/events')(client);
require('./modules/_functions')(client);

//Cache the permissions
for (let i = 0; i < client.config.permLevels.length; i++) {
  let currentlevel = client.config.permLevels[i];
  client.levelCache[currentlevel.name] = currentlevel.level;
}

//Login to discord
client.login(process.env.BOT_TOKEN);

//Export the client
module.exports = client;
