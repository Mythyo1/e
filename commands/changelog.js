exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
   let log = 'V2.5:\n' + 'Added changelog command.\n' + 'Fixed grammar (thanks Rexo!)';
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
