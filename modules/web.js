//Import NPM modules
const http = require('http');
const express = require('express');
const app = express();
const Discord = require('discord.js');

//Define variubles
const client = new Discord.Client();

//Import files
client.logger = require('./Logger');
const init = () => {
  //Request the glitch project every 28s
  setInterval(async () => {
    //Request the glitch project
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);

  //Make the all of the HTTP files redirect to the public folder
  app.use(express.static('public'));

  //Fires when someone sends a request to the home directory
  app.get('/', async (request, response) => {
    //Send "oof" to the user
    response.send('oof');
  });

  //Make the web server listen on the specified port
  const listener = app.listen(process.env.PORT, async () => {
    //Log that the web server started
    client.logger.log('Web server started.');
  });

}

module.exports = init;