module.exports = (client, reaction, user) => {
  client.selfrole.forEach(async (role) => {
    if (role.guildid == reaction.message.guild.id) {
      if (role.messageid == reaction.message.id) {
        reaction.message.guild.members.get(user.id).addRole(reaction.message.guild.roles.get(role.roleid));
      }
    }
  });
};