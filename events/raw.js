module.exports = (client, packet) => {
  if (client.readyTimestamp == null) return;
  
  let events = ['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE', 'MESSAGE_DELETE'];
    
  if (!events.includes(packet.t)) return;
  
  let channel = client.channels.get(packet.d.channel_id);
  if (channel.messages.has(packet.d.message_id)) return;
  
  if (['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) {
    channel.fetchMessage(packet.d.message_id).then(message => {
      let emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
      let reaction = message.reactions.get(emoji);
        
      if (reaction) reaction.users.set(packet.d.user_id, client.users.get(packet.d.user_id));
      if (packet.t == 'MESSAGE_REACTION_ADD') {
        client.emit('messageReactionAdd', client, reaction, client.users.get(packet.d.user_id));
      }

      if (packet.t == 'MESSAGE_REACTION_REMOVE') {
          client.emit('messageReactionRemove', client, reaction, client.users.get(packet.d.user_id));
        }
      });
    }
};