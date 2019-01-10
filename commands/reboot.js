exports.run = (client, message) => {
  if (message.author.id == client.config.owner || message.author.id == client.config.coowner) {
    message.channel.send('Rebooting.');
    client.destroy();
    client.login(process.env.BOT_TOKEN);
  } else {
    message.channel.send('You dont have the perms to do this!');
  }
};