const router = require('express').Router();
const client = require('../../app');

router.get('/', (req, res) => {
  res.render('api/index', {
    'user': req.session.user,
    'djsclient': client
  });
});

module.exports = router;