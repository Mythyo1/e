const Minesweeper = require('discord.js-minesweeper');
const express = require('express');
const request = require('request');

const logger = require('/app/modules/Logger');

const app = express();
const port = 3000;
const pewds = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&key=' + process.env.YOUTUBE_API_KEY + '&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw';
const tseries = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&key=' + process.env.YOUTUBE_API_KEY + '&id=UCq-Fj5jknLsUf-MWSy4_brA';

const initWeb = (client) => {
  app.get('/', (req, res) => res.send('<script>window.location.href = "https://api.cytrus.ga/api/"</script><noscript><a href="https://api.cytrus.ga/api">Cytrus API</a></noscript>'));
  app.get('/api/', (req, res) => res.sendFile('/app/views/api/docs.html'));
  app.get('/api/invite', (req, res) => res.send({status: 200, invite: 'https://discordapp.com/oauth2/authorize?client_id=526593597118873620&scope=bot&permissions=8'}));
  app.get('/api/server', (req, res) => res.send({status: 200, server: 'https://discord.gg/VfTE9GH'}));
  app.get('/api/client_id', (req, res) => res.send({status: 200, client_id: '526593597118873620'}));
  app.get('/api/paths', (req, res) => res.send({status: 200, urls: ['/', '/api', '/api/subgap', '/api/invite', '/api/server', '/api/client_id', '/api/paths', '/api/botList', '/api/upvote']}));
  app.get('/api/upvote', (req, res) => res.send({status: 200, upvote: 'https://discordbotlist.com/bots/526593597118873620/upvote'}));
  app.get('/api/botList', (req, res) => res.send({status: 200, botList: 'https://discordbotlist.com/bots/526593597118873620/'}));
  app.get('/api/website', (req, res) => res.send({status: 200, website: 'https://www.cytrus.ga'}));
  app.get('/api/subgap', (req, res) => {
    let psubs;
    let tsubs;
  
    request({url: pewds, json: true}, (req, resp, jsonp) => {
      psubs = jsonp.items[0].statistics.subscriberCount;
      request({url: tseries, json: true}, (req, rest, jsont) => {
        tsubs = jsont.items[0].statistics.subscriberCount;
        
        res.send({status: 200, subgap: Number(psubs) - Number(tsubs)})
      });
    });
  });
  app.get('/api/minesweeper', (req, res) => {
    let minesweeper = new Minesweeper();
    res.send({status: 200, minesweeper: minesweeper.start()});
  });
  
  app.use((req, res) => {
    res.status(404).send({status: 404, paths: '/api/paths'});
  });
  
  app.listen(port, () => logger.log(`Web server started.`, 'ready'));
};

module.exports = initWeb;