const Discord = require('discord.js');
const crypto = require('crypto');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (args[0] == 'create') {
      if (!message.guild) {
        let passwordRaw = await client.awaitReply(message, 'What do you want as your password?');
        let passwordRawConfirm = await client.awaitReply(message, 'Confirm your password');
        if (passwordRaw !== passwordRawConfirm) return message.channel.send('Your password does not match the confirmation.');
        let password = crypto.createHash('sha256').update(passwordRawConfirm).digest("hex");

        let msg = await message.channel.send('Creating Profile...');
        client.logins.set(message.author.id, password);
        msg.edit('Profile Created!');
        client.liusers.set(message.author.id, true);
      }
      else message.channel.send('Profile create is unavailable via a guild. Please run this command in DM\'s.');
    } else if (args[0] == 'login') {
      if (!message.guild) {
        let passwordRaw = await client.awaitReply(message, 'What is your password?');
        let password = crypto.createHash('sha256').update(passwordRaw).digest("hex");
        let msg = await message.channel.send('Logging in...');

        if (password == client.logins.get(message.author.id)) {
          client.liusers.set(message.author.id, true);
          msg.edit('Logged in!');
        } else msg.edit('I could not find a user with that password. (If you need help creating an account try using createprofile instead)');
      }

      else message.channel.send('Profile login is unavailable via a guild. Please run this command in DM\'s.');
    } if (args[0] == 'logout') {
      let msg = await message.channel.send('Logging out...');
      
      if (client.liusers.get(message.author.id)) {
        client.liusers.delete(message.author.id);
        msg.edit('You are logged out!');
      } else msg.edit('You are not logged in! (Use login instead)');
    } else {
      let embed = new Discord.RichEmbed()
      .setTitle('Profile')
      .setColor('#eeeeee')
      .setDescription(`Name: ${message.author.username}
UserID: ${message.author.id}
Status: ${message.author.presence.status}
Image URL: ${message.author.avatarURL}
Account Created At: ${message.author.createdAt}`);
      
      message.channel.send(embed);
    }
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'profile',
  category: 'General',
  description: 'Shows info for your profile',
  usage: 'profile [create/login/logout]'
};
