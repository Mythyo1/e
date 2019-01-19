const http = require('http');
const express = require('express');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
client.logger = require('./Logger');

setInterval(async () => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

app.use(express.static('public'));
app.get('/', async (request, response) => {
  response.send('oof');
});

const listener = app.listen(process.env.PORT, async () => {
  client.logger.log('Web server started.');
});

