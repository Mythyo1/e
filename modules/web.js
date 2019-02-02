const express = require('express')
const app = express()
const port = 3000
const logger = require('/app/modules/Logger');

const initWeb = function() {
  app.get('/api', (req, res) => res.send({status: 200, botList: 'https://discordbotlist.com/bots/526593597118873620/', upvote: 'https://discordbotlist.com/bots/526593597118873620/upvote', invite: 'https://discordapp.com/oauth2/authorize?client_id=526593597118873620&scope=bot&permissions=8', client_id:'526593597118873620', server: 'https://discord.gg/VfTE9GH'}));
  app.get('/api/invite', (req, res) => res.send({status: 200, invite: 'https://discordapp.com/oauth2/authorize?client_id=526593597118873620&scope=bot&permissions=8'}));
  app.get('/api/server', (req, res) => res.send({status: 200, server: 'https://discord.gg/VfTE9GH'}));
  app.get('/api/client_id', (req, res) => res.send({status: 200, client_id: '526593597118873620'}));
  app.get('/api/paths', (req, res) => res.send({status: 200, urls: ['/', '/api/', '/api/invite', '/api/server', '/api/client_id', '/api/paths', '/api/botList', '/api/upvote']}));
  app.get('/api/upvote', (req, res) => res.send({status: 200, upvote: 'https://discordbotlist.com/bots/526593597118873620/upvote'}));
  app.get('/api/botList', (req, res) => res.send({status: 200, botList: 'https://discordbotlist.com/bots/526593597118873620/'}));
  app.get('/', (req, res) => res.send('<script>window.location.href="https://cytrus.ga/";</script><noscript><a href="https://cytrus.ga">Cytrus Webpage</a></noscript>'));
  
  app.use(function(req, res) {
    res.status(404).send({status: 404, paths: '/paths'});
  });
  
  app.listen(port, () => logger.log(`Web server started.`));
};
module.exports = initWeb;