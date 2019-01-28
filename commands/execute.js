/*

*/
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const execute = (command) => {
    const exec = require('child_process').exec

    exec(command, (err, stdout, stderr) => {
      message.author.send(stdout)
    })
  }

  execute(args.join(' '));
};

exports.conf = {
  enabled: true,
  aliases: ['exec'],
  permLevel: 'Bot Manager'
};

exports.help = {
  name: 'execute',
  category: 'System',
  description: 'Executes a command in the shell',
  usage: 'execute <shell command>'
};
