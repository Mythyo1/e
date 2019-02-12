const express = require('express');
const logger = require('/app/modules/Logger');

const app = express();
const port = 3000;

const initWeb = (client) => {
  app.get('/api/', (req, res) => res.sendFile('/app/views/api/docs.html'));
  app.get('/api/invite', (req, res) => res.send({status: 200, invite: 'https://discordapp.com/oauth2/authorize?client_id=526593597118873620&scope=bot&permissions=8'}));
  app.get('/api/server', (req, res) => res.send({status: 200, server: 'https://discord.gg/VfTE9GH'}));
  app.get('/api/client_id', (req, res) => res.send({status: 200, client_id: '526593597118873620'}));
  app.get('/api/paths', (req, res) => res.send({status: 200, urls: ['/', '/api/', '/api/invite', '/api/server', '/api/client_id', '/api/paths', '/api/botList', '/api/upvote']}));
  app.get('/api/upvote', (req, res) => res.send({status: 200, upvote: 'https://discordbotlist.com/bots/526593597118873620/upvote'}));
  app.get('/api/botList', (req, res) => res.send({status: 200, botList: 'https://discordbotlist.com/bots/526593597118873620/'}));
  app.get('/api/website', (req, res) => res.send({status: 200, website: 'https://www.cytrus.ga'}));
  
  app.use((req, res) => {
    res.status(404).send({status: 404, paths: '/api/paths'});
  });
  
  app.listen(port, () => logger.log(`Web server started.`, 'ready'));
};

module.exports = initWeb;