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

//client.on('message', msg => {
//console.log(msg.author.tag + " (" + msg.guild + " in #" + msg.channel.name + "(" + msg.channel.id + ")" + "): " + msg.content)
//});
