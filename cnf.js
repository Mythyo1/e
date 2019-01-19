const config = {
  // Bot Owner, level 10 by default. A User ID. Should never be anything else than the bot owner's ID.
  'owners': ['493922020783030282', '314165962100310017'],

  // Bot Admins, level 9 by default. Array of user ID strings.
  'admins': ['463051744071516201'],
  
  'mods': [],

  // Bot Support, level 8 by default. Array of user ID strings
  'support': [],
  
  'globalBan': [],

  // Your Bot's Token. Available on https://discordapp.com/developers/applications/me
  'token': 'mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0',

  // Default per-server settings. New guilds have these settings. 

  // DO NOT LEAVE ANY OF THESE BLANK, AS YOU WILL NOT BE ABLE TO UPDATE THEM
  // VIA COMMANDS IN THE GUILD.
  
  'defaultSettings' : {
    'prefix': 'cy.',
    'modLogChannel': 'log',
    'modRole': 'Moderator',
    'adminRole': 'Administrator',
    'muteRole': 'muted',
    'systemNotice': 'true',
    'welcomeChannel': 'general',
    'welcomeMessage': 'Welcome to the server {{user}}!',
    'welcomeEnabled': 'true',
  },

  permLevels: [
    { level: 0,
      name: 'User',
     
      check: () => true
    },

    { level: 1,
      name: 'Moderator',

      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },

    { level: 2,
      name: 'Administrator',
     
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id));
        } catch (e) {
          return false;
        }
      }
    },
    
    { level: 3,
      name: 'Server Owner', 
     
      check: (message) => message.channel.type === 'text' ? (message.guild.ownerID === message.author.id ? true : false) : false
    },
    
    { 
      level: 4,
      name: 'Bot Support',
      
      check: (message) => config.support.includes(message.author.id)
    },

    { 
      level: 5,
      name: 'Bot Mod',
      
      check: (message) => config.mods.includes(message.author.id)
    },
    
    { level: 6,
      name: 'Bot Admin',
     
      check: (message) => config.admins.includes(message.author.id)
    },

    { level: 7,
      name: 'Bot Owner',
     
      check: (message) => config.owners.includes(message.author.id)
    }
  ]
};

module.exports = config;