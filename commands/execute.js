const exec = require('child_process').exec
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    const execute = (command) => {

      message.channel.send('Command Executed In Shell.');
      exec(command, (err, stdout, stderr) => {
        message.author.send(stdout);
        if (err || stderr) {
          if (err) {
            message.author.send('```'+err+'```');
          }

          if (stderr) {
            message.author.send('```'+stderr+'```');
          }

          message.channel.send('Shell Error.');
        }
      });
    }

    execute(args.join(' '));
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['exec'],
  guildOnly: false,
  permLevel: 'Bot Manager'
};

exports.help = {
  name: 'execute',
  category: 'System',
  description: 'Executes a command in the shell',
  usage: 'execute <shell command>'
};
