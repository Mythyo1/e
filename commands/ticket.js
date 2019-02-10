const Discord = require('discord.js');
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let embed;
    const friendly = client.config.permLevels.find(l => l.level === level).name;
    
    if (client.liusers.get(message.author.id)) {
      if (args[0] == 'add') {
        let msg = await message.channel.send('Creating ticket...');
        if (client.tickets.size) {
          client.tickets.set(client.tickets.size+1, {
            text: args.slice(1).join(' '),
            time: message.createdAt
          });

          embed = new Discord.RichEmbed()
          .setTitle('Support Ticket')
          .setDescription('Support Ticket Created')
          .addField('TicketID', client.tickets.size)
          .addField('Text', client.tickets.get(client.tickets.size).text)
          .addField('Created At', client.tickets.get(client.tickets.length).time)
          .setColor('#eeeeee');
        } else {
          client.tickets.set('0', {
            text: args.slice(1).join(' '),
            time: message.createdAt
          });

          embed = new Discord.RichEmbed()
          .setTitle('Support Ticket')
          .setDescription('Support Ticket Created')
          .addField('TicketID', '0')
          .addField('Text', client.tickets.get('0').text)
          .addField('Created At', client.tickets.get('0').time)
          .setColor('#eeeeee');
        }

        msg.edit(embed);
      } else if (args[0] == 'remove') {
        if (level >= 6) {
          if (client.tickets.get(args[1]) == undefined || client.tickets.get(args[1]) == null) message.reply('That is not a valid TicketID!');
          else {
            let msg = await message.channel.send('Removing ticket...');
            client.tickets.delete(args[1]);
            client.tickets.delete(args[1]);
            msg.edit('Ticket removed');
          }
        } else message.reply(`
You do not have permission to use this command.
Your permission level is ${level} (${friendly})
This command requires level 6 (Bot Support)`);
      } else if (args[0] == 'get') {
        if (client.tickets.get(args[1])) {
          let msg = await message.channel.send('Getting ticket...');
          let embed = new Discord.RichEmbed()
          .setTitle('Support Ticket')
          .setDescription('Support Ticket Created')
          .addField('Text', client.tickets.get(args[1]).text)
          .addField('Created At', client.tickets.get(args[1]).time)
          .setColor('#eeeeee');

          msg.edit(embed);
        } else if (!client.tickets.get(args[1])) {
          message.reply('That is not a valid ticketID');
        }
      } else {
        if (!client.tickets.get('0')) {
          message.reply('There are no support tickets!');
        } else {
          let i = 0;
          client.tickets.forEach(async (ticket) => {
            let embed = new Discord.RichEmbed()
            .setTitle('Support Ticket')
            .setDescription('Support Ticket Created')
            .addField('TicketID', i)
            .addField('Text', ticket.text)
            .addField('Created At', ticket.time)
            .setColor('#eeeeee');

            message.channel.send(embed);
            i++;
          });
        }
        let i = 0;
        client.tickets.forEach(async (ticket) => {
          let embed = new Discord.RichEmbed()
          .setTitle('Support Ticket')
          .setDescription('Support Ticket Created')
          .addField('TicketID', i)
          .addField('Text', ticket.text)
          .addField('Created At', ticket.time)
          .setColor('#eeeeee');

          message.channel.send(embed);
          i++;
        });
      }
    } else message.reply('You need to be logged in to use this command! (Use profile login instead)');
  } catch (err) {
    message.channel.send('There was an error!\n' + err.stack).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'ticket',
  category: 'General',
  description: 'Generates a support ticket',
  usage: 'ticket <add/remove/get> [text]'
};
