const zaq = require('zaq');

module.exports = (client) => {
  //Return the permission level
  client.permlevel = (message) => {
    let permlvl = 0;

    //Sort the permission levels
    const permOrder = client.config.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

    while (permOrder.length) {
      //Make the current level the first level in the array
      const currentLevel = permOrder.shift();
      
      //If the message is sent in a guild, Continue
      if (message.guild && currentLevel.guildOnly) continue;
      if (currentLevel.check(message)) {
        permlvl = currentLevel.level;
        break;
      }
    }
    return permlvl;
  };

  client.getSettings = (guild) => {
    const defaults = client.config.defaultSettings || {};
    if (!guild) return defaults;
    const guildData = client.settings.get(guild) || {};
    const returnObject = {};
    Object.keys(defaults).forEach((key) => {
      returnObject[key] = guildData[key] ? guildData[key] : defaults[key];
    });
    return returnObject;
  };
  
  client.awaitReply = async (msg, question, limit = 30000) => {
    const filter = m => m.author.id === msg.author.id;
    await msg.channel.send(question);
    try {
      const collected = await msg.channel.awaitMessages(filter, { max: 1, time: limit, errors: ['time'] });
      return collected.first().content;
    } catch (e) {
      return false;
    }
  };

  client.clean = async (client, text) => {
    if (text && text.constructor.name == 'Promise') text = await text;
    if (typeof evaled !== 'string') text = require('util').inspect(text, {depth: 1});

    text = text
    .replace(/`/g, '`' + String.fromCharCode(8203))
    .replace(/@/g, '@' + String.fromCharCode(8203))
    .replace(process.env.BOT_TOKEN, client.config.token);

    return text;
  };

  client.loadCommand = (commandName) => {
    try {
      const props = require(`../commands/${commandName}`);
      if (props.init) {
        props.init(client);
      }
      
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props);
      });
      return false;
    } catch (e) {
      return `Unable to load command ${commandName}: ${e}`;
    }
  };

  client.unloadCommand = async (commandName) => {
    let command;
    if (client.commands.has(commandName)) {
      command = client.commands.get(commandName);
    }
    
    if (!command) return `The command \`${commandName}\` doesn't seem to exist. Try again!`;
  
    await client.commands.get(commandName).conf.aliases.forEach(alias => {
      client.aliases.delete(alias);
    });
    
    client.commands.delete(commandName);
    
    const mod = require.cache[require.resolve(`../commands/${commandName}`)];
    delete require.cache[require.resolve(`../commands/${commandName}.js`)];
    for (let i = 0; i < mod.parent.children.length; i++) {
      if (mod.parent.children[i] === mod) {
        mod.parent.children.splice(i, 1);
        break;
      }
    }
    return false;
  };
  
  client.wait = require('util').promisify(setTimeout);
  
  client.truncate = (str, num = 20) => {
    if (str.length > num) return str.slice(0, num) + '...';
    else return str;
  };
  
  Object.defineProperty(String.prototype, 'toProperCase', {
    value: function() {
      return this.replace(/([^\W_]+[^\s-]*) */g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
  });

  Object.defineProperty(Array.prototype, 'random', {
    value: function() {
      return this[Math.floor(Math.random() * this.length)];
    }
  });

  
  process.on('uncaughtException', (err) => {
    let errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
    
 
    zaq.fatal(err, {
      detail: errorMsg,
      executionTime: new Date(),
      sessionId: process.pid
    });
    client.destroy();
    process.exit(1);
  });
  
  process.on('unhandledRejection', (err) => {
    if (err.name == 'DiscordAPIError') return;
    zaq.err(err, {
      detail: errorMsg,
      executionTime: new Date(),
      sessionId: process.pid
    });
  });
  
  process.on('exit', () => {
    client.destroy();
    client = null;
  });
};
