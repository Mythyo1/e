const router = require('express').Router();
const client = require('../../app');
const beautify = require('js-beautify').js;

router.get('/', async (req, res) => {
  if (!req.session.user) return res.redirect('/');
  if (!req.session.guilds) return res.redirect('/');
  if (!client.guilds.has(req.query.id)) return res.redirect('/');
  if (!client.guilds.get(req.query.id).members.has(req.session.user.id)) return res.redirect('/');
  
  res.render('server/members', {user: req.session.user, guild: req.query.id, djsclient: client});
});

router.get('/config', async (req, res) => {
    if (!req.session.user) return res.redirect('/');
    if (!req.session.guilds) return res.redirect('/');
    if (!client.guilds.has(req.query.id)) return res.redirect('/');
    if (!client.guilds.get(req.query.id).members.get(req.session.user.id).hasPermission('BAN_MEMBERS')) return res.redirect('/guild?id=' + req.querys.id);
  
    res.render('server/config', {user: req.session.user, guild: req.query.id, djsclient: client});
});

router.post('/config', async (req, res) => {
  if (!req.session.user) return res.redirect('/');
  if (!req.session.guilds) return res.redirect('/');
  if (!client.guilds.has(req.query.id)) return res.redirect('/');
  if (!client.guilds.get(req.query.id).members.has(req.session.user.id)) return res.redirect('/');
  if (!client.guilds.get(req.query.id).members.get(req.session.user.id).hasPermission('BAN_MEMBERS')) return res.redirect('/guild?id=' + req.querys.id);
  
  console.log(beautify(req, { indent_size: 2, space_in_empty_paren: true }));
  //client.settings.set(req.query.id, req.body);
  res.render('server/config', {user: req.session.user, guild: req.query.id, djsclient: client});
});

module.exports = router;