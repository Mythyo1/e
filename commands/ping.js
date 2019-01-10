exports.run = (client, message) => {
    message.channel.send(`Pong! ${Math.floor(client.ping)}ms`).catch(console.error);
};