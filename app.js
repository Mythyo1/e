//Check if the node version is 8.0.0+
if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("NodeJS 8.0.0 or higher is required. Re-run this with NodeJS 8.0.0+");

//Define NPM modules
const fs = require('fs');
const Discord = require("discord.js");
const util = require("util");
const Enmap = require("enmap");
const http = require('http');
const express = require('express');

//Define variubles
const promisify = util.promisify;
const readdir = promisify(require("fs").readdir);
const app = express();
const client = new Discord.Client();
require("./modules/functions.js")(client);
client.config = require("./cnf");
client.logger = require("./modules/Logger");
client.commands = new Enmap();
client.aliases = new Enmap();
client.spotify = new Enmap();
client.settings = new Enmap({name: "settings"});

//Runs bot
const run = async () => {
  //Get command files
  const cmdFiles = await readdir("./commands/");
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });
  console.log();

  //Get event files
  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
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

  client.spotify.set("rap", "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd");
  client.spotify.set("games", "https://open.spotify.com/playlist/5bzUd5ygYq9iiGvSUfxmDN");
  client.spotify.set("memes", "https://open.spotify.com/playlist/6dexJqtAIi8A2Mi35g6GfT");
  client.spotify.set("dubstep", "https://open.spotify.com/playlist/1A7pY65wgTarJ85of9M981");
  client.spotify.set("catchy", "https://open.spotify.com/playlist/0u82M1UonGIU8QuCOXDJYu");
  client.spotify.set("nightcore", "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4d9PxK");
  
  //Login to discord
  client.login(process.env.BOT_TOKEN);
};

const web = () => {
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);

  app.use(express.static('public'));
  app.get('/', (request, response) => {
    response.send('oof');
  });

  const listener = app.listen(process.env.PORT, () => {
    console.log('Web server started.');
  });
};

//Initalize bot
run()
web()