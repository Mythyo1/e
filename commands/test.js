exports.run = async (client, message, args, level) => {
  try {
    message.channel.send(new client.Embed('blend', {
      title: 'Embed System',
      description: 'Hello!',
      thumbnail: 'https://cdn.discordapp.com/avatars/526593597118873620/f0d2050df0608f196d81fa5221bc6415.png?size=2048',
      author: {
        name: 'CelestialCrafter',
        icon: 'https://cdn.discordapp.com/avatars/493922020783030282/b3d8afcdfaccc3bb8fe6ef85601bd7be.png?size=2048',
        url: 'https://cytrus.ga'
      },
      fields: [
        {
          title: 'Embed',
          text: 'This is my Embed System!',
          inline: true
        },
        {
          title: 'Inline Field',
          text: 'This is also an inline Embed Field!',
          inline: true
        },
        'blank'
      ],
      timestamp: true,
      footer: 'Made by CelestialCrafter (╯°□°）╯︵ ┻━┻'
    }));
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
  name: 'test',
  category: 'General',
  description: 'Returns the test embed',
  usage: 'test'
};
