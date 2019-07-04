exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
   let log = 'V2.6:\n' + 'Added two commands: toycat and sync (get the link for Toycat\'s channel and, for bot mods, sync the bot instance with the Github repo).\n' + 'More grammar fixes (thanks Rexo and EDGE!)\n' 'Coming soon: removal of some unused comamnds and more flippin\' grammar!';
   require('../changelog').forEach((change) => log += '\n- ' + change);
  
   message.channel.send(log);
  } catch (err) {
   message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['changes', 'updates'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'changelog',
  category: 'Utility',
  description: 'Returns the latest changelog for Cytrus.',
  usage: 'changelog'
};
