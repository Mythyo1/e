const safeEval = require('safe-eval');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let code = args.join(' ');
    
    let ctx = {
      args: args,
      level: level,
      math: require('mathjs').eval,
      txtgen: require('txtgen'),
      nekoslife: require('nekos.life'),
      joke: require('one-liner-joke'),
      weeb: require('node-weeb')
    }
    
    let evaled = safeEval(code, ctx);
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
  description: 'Evaluates javascript without the NodeJS API\'s and is safe for anyone to use. APIs: `weeb` = require(\'node-weeb\'), `joke` = require(\'one-liner-joke\'), `nekoslife` = require(\'nekos.life\'), `math` = require(\'mathjs\'), `txtgen` = require(\'txtgen\'), `level`, `args`',
  usage: 'openeval [code]'
};
