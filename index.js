// modules
const Discord = require("discord.js");
const dclib = require('./lib/discord');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');
const filesystem = require("./lib/filesystem")
const client = dclib.client();
require('dotenv').config();

var muted
if(fs.existsSync('./muted.json')){
muted = filesystem.loadJSON('./muted.json');
} else {
muted = {};
}
filesystem.writeJSON('./muted.json', muted)

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
  if (msg == "mute") {
    await mute();
    filesystem.writeJSON('./muted.json', muted)
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

async function mute(){
  const midobj = await inquirer.askMutedID();
  const mid = midobj.ChannelID
  if (muted[mid] != "undefined"){
    muted[mid] = !muted[mid];
  } else {
    muted[mid] = true;
  }
}

client.on('ready', async () => {
   await channel();
   while (active){
    await message();
   }
  process.exit();
});


client.on('message', msg => {
 if (!muted[msg.channel.id]) {
  if (msg.guild != null) {
    ui.log.write(msg.author.tag + " (" + msg.guild + " in #" + msg.channel.name + "(" + msg.channel.id + ")" + "): " + msg.content);
  } else {
    ui.log.write(msg.author.tag + " (in DM): " + msg.content);
  }
}
});


client.login(process.env.TOKEN)
  .catch(err => {
    if (err.toString().startsWith("Error: An invalid token was provided.")) {
      console.log(chalk.red("Please ensure you have created a .env file and set the correct bot token within it. See README.md for installation instructions."));
    }
    else if (err.toString().startsWith("Error: Incorrect login details were provided.")) {
      console.log(chalk.red("The bot token you have set in .env is incorrect. Please reset the token on Discord Developer Portal and use the new one that is generated. See README.md for installation instructions."));
    }
    process.exit();
  });

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   
