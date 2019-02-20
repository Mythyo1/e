const router = require('express').Router();
const client = require('../../app');

router.get('/', (req, res) => {
  res.render('index', {pageTitle: 'Dashboard', user: req.session.user, guilds: req.session.guilds, djsclient: client});
});

module.exports = router;