const Discord = require("discord.js")
const client = new Discord.Client()

module.exports = {
 send: (id, msg) => {
  if (client.channels.get(id)) {
    client.channels.get(id).send(msg);
  } else {
    if (client.users.get(id)){
      client.users.get(id).send(msg);
    } else {
        console.log("This message should never appear, if you see this, I fucked up, exiting");
        process.exit();
    }
  }
  },
 client: () => {
  return client;
 }
}
