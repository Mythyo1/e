let choices = ['rock', 'paper', 'scissors'];

exports.run = async (client, message, args, level) => {
  try {
    if (!args[0]) return message.reply('You need to input rock, paper, or scissors!');
    
    if (!choices.includes(args[0])) return message.reply('You need to choose rock, paper, or scissors!');
    
    let urps = args[0];
    let brps = choices.random();
    let low;
    
    if (urps == brps) low = 'Tie!';
    
    if (urps == 'rock' && brps == 'paper' && !low) low = 'I Win!';
    if (urps == 'scissors' && brps == 'rock' && !low) low = 'I Win!';
    if (urps == 'paper' && brps == 'rock' && !low) low = 'You Win!';
    if (urps == 'rock' && brps == 'scissors' && !low) low = 'You Win!';
    if (urps == 'paper' && brps == 'scissors' && !low) low = 'I Win!';
    if (urps == 'scissors' && brps == 'paper' && !low) low = 'You Win!';
    
    let embed = new client.Embed('blend', {
      title: low,
      description: 'I choose ' + brps + '\nAnd you choose ' + urps
    });
    
    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['rps'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'rockpaperscissors',
  category: 'Game',
  description: 'Returns a game of rock, paper, scissors',
  usage: 'rockpaperscissors <rock, paper, scissors>'
};
