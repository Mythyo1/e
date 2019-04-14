[**Home**](index.md) | [**Links**](links.md) | [**Commands**](commands.md) | [**Info**](info.md) | [**API Docs**](https://app.cytrus.ga/api) | [**Dashboard**](https://app.cytrus.ga)

  
  
  
# Cytrus
A multipurpose bot to cover all your needs.

## How to set up
Create a .env file in the directory Cytrus is installed in.  
Paste the text below into the .env file:  
```js
BOT_TOKEN='`YourBotToken`'  
LOG_WEBHOOK_TOKEN='`YourLogChannelWebhookToken`'  
LOG_WEBHOOK_ID='`YourLogChannelWebhookID`'
```
> Start the app.js file  

## Links
### API
[Visit](https://api.cytrus.ga/api/)
​
### Bot List
[Visit](https://discordbotlist.com/bots/526593597118873620/)
​
### Upvote
[Visit](https://discordbotlist.com/bots/526593597118873620/upvote)
​
### Invite
[Visit](https://discordapp.com/oauth2/authorize?client_id=526593597118873620&scope=bot&permissions=8)
​
### Client Id
526593597118873620
​
### Server
[Visit](https://discord.gg/VfTE9GH)

<script  src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer></script>
<script>
  const crate = new Crate({
    server: '529845146402029569',
    channel: '529845146402029573',
    shard: 'https://disweb.deploys.io',
    location: ['bottom', 'right']
  });
  
  crate.notify({
    content: '`Welcome to cytrus.ga!`',
    timeout: 2000,
    avatar: 'https://cdn.discordapp.com/avatars/526593597118873620/f0d2050df0608f196d81fa5221bc6415.png?size=2048'
  });
</script>
