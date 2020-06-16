// modules
const Discord = require("discord.js");
const dclib = require('./lib/discord');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const client = dclib.client();
require('dotenv').config();

clear();

for(var i=0; i<50; i++){
  console.log("\n");
}

const inquirer  = require('./lib/inquirer');
const iq = inquirer.iq();
const ui = new iq.ui.BottomBar();

ui.log.write(
  chalk.yellow(
    figlet.textSync('Discord', { horizontalLayout: 'full' })
  )
);

var id;
const channel = async () => {
  id = await inquirer.askChannelID();
  id = id.ChannelID
  if (client.channels.get(id)) {
  ui.log.write("Channel: " + client.channels.get(id).name + " (" + client.channels.get(id).guild.name +")");
  } else {
    if (client.users.get(id)){
      ui.log.write("User: " + client.users.get(id).tag);
    } else {
        console.log("This message should never appear, if you see this, I fucked up, exiting");
        process.exit();
    }
  }
};

var active = true;
const message = async () => {
  const msgstring = await inquirer.promtMessage();
  msg = msgstring.msg;
  if (msg == "channel" || msg == "ch") {
   await channel();
   return;
  }
  if (msg == "quit" || msg == "exit" || msg == "q"){
   active = false;
   return;
  }
  dclib.send(id, msg);
  await sleep(100);
  return;
  };


client.on('ready', async () => {
   await channel();
   while (active){
    await message();
   }
  process.exit();
});


client.on('message', msg => {
  ui.log.write(msg.author.tag + " (" + msg.guild + " in #" + msg.channel.name + "(" + msg.channel.id + ")" + "): " + msg.content);
});


client.login(process.env.TOKEN);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   
