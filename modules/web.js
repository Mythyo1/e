const express = require('express');
const app = express();
const port = 3000;
const logger = require('/app/modules/Logger');

const initWeb = () => {
  app.get('/', (req, res) => res.sendFile('/app/views/api/docs.html'));
  app.get('/invite', (req, res) => res.send({status: 200, invite: 'https://discordapp.com/oauth2/authorize?client_id=526593597118873620&scope=bot&permissions=8'}));
  app.get('/server', (req, res) => res.send({status: 200, server: 'https://discord.gg/VfTE9GH'}));
  app.get('/client_id', (req, res) => res.send({status: 200, client_id: '526593597118873620'}));
  app.get('/paths', (req, res) => res.send({status: 200, urls: ['/', '/api/', '/api/invite', '/api/server', '/api/client_id', '/api/paths', '/api/botList', '/api/upvote']}));
  app.get('/upvote', (req, res) => res.send({status: 200, upvote: 'https://discordbotlist.com/bots/526593597118873620/upvote'}));
  app.get('/botList', (req, res) => res.send({status: 200, botList: 'https://discordbotlist.com/bots/526593597118873620/'}));
  app.get('/website', (req, res) => res.send({status: 200, website: 'https://www.cytrus.ga'}));
  
  app.use((req, res) => {
    res.status(404).send({status: 404, paths: '/paths'});
  });
  
  app.listen(port, () => logger.log(`Web server started.`, 'ready'));
};

module.exports = initWeb;