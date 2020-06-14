const Discord = require("discord.js")
const client = new Discord.Client()

module.exports = {
 send: (id, msg) => {
  client.channels.get(id).send(msg);
  },
 client: () => {
  return client;
 }
}
