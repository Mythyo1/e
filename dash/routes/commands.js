const router = require('express').Router();
const client = require('../../app');

router.get('/', async (req, res) => {
  if (!req.session.user || req.session.guild) res.redirect('/');
  
  if (req.query.command) {
    if (!client.commands.has(req.query.command)) return res.redirect('/commands');
  
    res.render('command', {user: req.session.user, guilds: req.session.guilds, djsclient: client, command: req.query.command});
  } else res.render('commands', {user: req.session.user, guilds: req.session.guilds, djsclient: client});
});

module.exports = router;