const express = require('express')
const app = express()
const port = 3000
const logger = require('./Logger');

const initWeb = function() {
  app.get('/', (req, res) => res.send({status: 200, botList: 'https://discordbotlist.com/bots/526593597118873620/', upvote: 'https://discordbotlist.com/bots/526593597118873620/upvote', invite: 'https://discordapp.com/oauth2/authorize?client_id=526593597118873620&scope=bot&permissions=8', client_id:'526593597118873620', server: 'https://discord.gg/VfTE9GH', client_id: '526593597118873620'}));
  app.get('/invite', (req, res) => res.send({status: 200, invite: 'https://discordapp.com/oauth2/authorize?client_id=526593597118873620&scope=bot&permissions=8'}));
  app.get('/server', (req, res) => res.send({status: 200, server: 'https://discord.gg/VfTE9GH'}));
  app.get('/client_id', (req, res) => res.send({status: 200, client_id: '526593597118873620'}));
  app.get('/paths', (req, res) => res.send({status: 200, urls: ['/', '/PewDiePie', '/invite', '/server', '/client', '/paths', '/botList', '/upvote']}));
  app.get('/upvote', (req, res) => res.send({status: 200, upvote: 'https://discordbotlist.com/bots/526593597118873620/upvote'}));
  app.get('/botList', (req, res) => res.send({status: 200, botList: 'https://discordbotlist.com/bots/526593597118873620/'}));
  app.get('/PewDiePie', (req, res) => res.send('<script src="https://apis.google.com/js/platform.js"></script><div class="g-ytsubscribe" data-channel="PewDiePie" data-layout="full" data-theme="dark" data-count="default"></div>'));
  
  app.use(function(req, res) {
    res.status(404).send({status: 404, paths: '/paths'});
  });
  
  app.listen(port, () => logger.log(`Web server started.`));
};
module.exports = initWeb;