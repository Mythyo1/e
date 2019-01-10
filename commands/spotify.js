exports.run = (client, message, [playlist]) => {
  const registry = {
    "rap": "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
    "games": "https://open.spotify.com/playlist/5bzUd5ygYq9iiGvSUfxmDN",
    "memes": "https://open.spotify.com/playlist/6dexJqtAIi8A2Mi35g6GfT",
    "dubstep": "https://open.spotify.com/playlist/1A7pY65wgTarJ85of9M981",
    "heavymetal": "https://open.spotify.com/playlist/37i9dQZF1DX1cJWWyylDuw",
    "catchy": "https://open.spotify.com/playlist/0u82M1UonGIU8QuCOXDJYu"
  };
  
  if (!playlist) {
    message.author.send(`\nRap\nDubstep\nMemes\nGames\nAll\nHeavyMetal\Catchy`);
    message.channel.send('All music types In your DM\'s!');
  }
  
  switch(playlist) {
    case 'Rap':
      message.author.send(`\nRap: ${registry.rap}`);
      message.channel.send('Rap music In your DM\'s!');
      break;
    case 'Games':
      message.author.send(`\nGames: ${registry.games}`);
      message.channel.send('Game musicIn your DM\'s!');
      break;
    case 'Memes':
      message.author.send(`\nMemes: ${registry.memes}`);
      message.channel.send('Meme music In your DM\'s!');
      break;
    case 'DubStep':
      message.author.send(`\nDubStep: ${registry.dubstep}`);
      message.channel.send('DubStep music In your DM\'s!');
      break;
    case 'All':
      message.author.send(`\nRap\nDubStep\nMemes\nGames\nHeavyMetal\nCatchy\nAll`);
      message.channel.send('All music types In your DM\'s!');
      break;
    case 'HeavyMetal':
      message.author.send(`HeavyMetal: ${registry.heavymetal}`);
      message.channel.send('Heavy metal musicIn your DM\'s!');
      break;
    case 'Catchy':
      message.author.send(`Catchy: ${registry.catchy}`);
      message.channel.send('Catchy music In your DM\'s!');
      break;
  }
}