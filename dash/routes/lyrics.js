const router = require('express').Router();
const client = require('../../app');
const request = require('request');

router.get('/', async (req, res) => {
  if (!req.session.user) return res.redirect('/');
  if (!req.session.guilds) return res.redirect('/');
  
  if (!req.query.q) return res.redirect('/');
    
    request({url: 'https://api.ksoft.si/lyrics/search?q=' + encodeURIComponent(req.query.q), json: true, headers: {
      Authorization: 'Bearer ' + process.env.KSOFT_TOKEN
    }}, (reqr, resr, json) => {
      let success = true;
      if (!json.data[0]) success = false;
      
      res.render('lyrics', {user: req.session.user, guilds: req.session.guilds, djsclient: client, song: json.data[0], success: success});
    });
});

module.exports = router;