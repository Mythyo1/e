const Discord = require('discord.js');
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let msg;
    
    switch (args[0]) {
      case 'add':
        msg = await message.channel.send('Creating note...');
        
        await client.notes.set(message.author.id+message.id, {txt: args.slice(1).join(' '), id: message.author.id+message.id, author: message.author.id});
        msg.edit('Note created with the ID of ' + message.author.id+message.id);
        break;
      case 'remove':
        if (client.notes.has(args[1])) {
          msg = await message.channel.send('Deleting note...');

          await client.notes.delete(args[1]);
          msg.edit('Note deleted with the ID of ' + args[1]);
        } else message.reply('That is not a valid NoteID!');
        break;
      case 'clear':
        await client.notes.forEach((note)  => {
          if (note.author == message.author.id) client.notes.delete(note.id);
        });
        
        message.channel.send('Cleared your notes!');
        break;
      default:
          let output = '';

          await client.notes.forEach((note)  => {
            if (note.author == message.author.id) output += '•' + '*' + note.id + '*\n' + note.txt + '\n\n';
          });

          if (output == '') message.reply('There are no notes!');
          else message.channel.send(output);
        break;
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'note',
  category: 'General',
  description: 'Generates a note',
  usage: 'note [add [text]/remove [id]]'
};
