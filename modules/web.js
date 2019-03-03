const Minesweeper = require('discord.js-minesweeper');
const express = require('express');
const request = require('request');
const session = require('express-session');
const bodyParser = require('body-parser');
const moment = require('moment');
require('moment-duration-format');

const logger = require('/app/modules/Logger');

const app = express();
const port = process.env.PORT || 3000;
const pewds = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&key=' + process.env.YOUTUBE_API_KEY + '&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw';
const tseries = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&key=' + process.env.YOUTUBE_API_KEY + '&id=UCq-Fj5jknLsUf-MWSy4_brA';

const initWeb = (client) => {
  app.set('view engine', 'ejs');
  app.use(express.static('static'));
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    expires: 604800000
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use('/', require('../dash/routes/index'));
  app.use('/login', require('../dash/routes/discord'));
  app.use('/guild', require('../dash/routes/server'));
  app.use('/servers', require('../dash/routes/servers'));
  app.get('/anime', (req, res) => res.send('<script>window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";</script>'));
  app.get('/invite', (req, res) => res.send('<script>window.location.href = "https://discordapp.com/oauth2/authorize?client_id=526593597118873620&permissions=8&scope=bot";</script><noscript><a href="https://discordapp.com/oauth2/authorize?client_id=526593597118873620&permissions=8&scope=bot">https://discordapp.com/oauth2/authorize?client_id=526593597118873620&permissions=8&scope=bot</a></noscript>'));
  app.get('/status', (req, res) => {
    require('pidusage')(process.pid, (err, stats) => {
      const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
      res.render('../views/status.ejs', {
        'user': req.session.user,
        'stats': {
          'ram': `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`,
          'uptime': `${duration}`,
          'users': `${client.users.size.toLocaleString()}`,
          'servers': `${client.guilds.size.toLocaleString()}`,
          'channels': `${client.channels.size.toLocaleString()}`,
          'status': `${client.user.presence.status}`,
          'game': `${client.user.presence.game}`,
          'discord1js': `v${require('discord.js').version}`,
          'cpu_usage': `${Math.round(stats.cpu)}%`,
          'node1js': `${process.version}`,
          'voice_connections': `${client.voiceConnections.size}`,
          'dependencies': `${Object.keys(require('../package').dependencies).length}`
        }
      });
    });
  });
  app.get('/commands', (req, res) => res.render('../views/commands.ejs', {user: req.session.user, djsclient: client}));
  app.get('/api', (req, res) => res.sendFile('/app/views/api/docs.html'));
  app.get('/api/invite', (req, res) => res.send({status: 200, invite: 'https://discordapp.com/oauth2/authorize?client_id=526593597118873620&scope=bot&permissions=8'}));
  app.get('/api/server', (req, res) => res.send({status: 200, server: 'https://discord.gg/VfTE9GH'}));
  app.get('/api/client_id', (req, res) => res.send({status: 200, client_id: '526593597118873620'}));
  app.get('/api/upvote', (req, res) => res.send({status: 200, upvote: 'https://discordbotlist.com/bots/526593597118873620/upvote'}));
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
    res.status(404).send({status: 404, error: 'Page Not Found'});
  });
  
  
  app.listen(port, () => logger.log('Web server started.', 'ready'));
};

module.exports = initWeb;
