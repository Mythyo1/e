const safeEval = require('safe-eval');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let code = args.join(' ');
    
    let evaled = safeEval(code);
    let clean = await client.clean(client, evaled);
    message.author.send(`Response:\n\`\`\`js\n${clean}\n\`\`\``);
  } catch (err) {
    message.author.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  aliases: ['oe', 'open'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'openeval',
  category: 'System',
  description: 'Evaluates javascript without the NodeJS API\'s and is safe for anyone to use.',
  usage: 'openeval [code]'
};
