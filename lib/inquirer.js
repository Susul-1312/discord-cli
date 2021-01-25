const inquirer = require('inquirer');
const dclib = require('./discord')
const client = dclib.client();
module.exports = {
  askChannelID: () => {
    const questions = [
      {
        name: 'ChannelID',
        type: 'input',
        message: 'Enter the Channel you want to chat to:',
        validate: function( value ) {
          if (client.channels.get(value) || client.users.get(value)) {
            return true;
          } else {
            return 'Please enter the Channel you want to chat to.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  promtMessage: () => {
    const questions = [
      {
        name: 'msg',
        type: 'input',
        message: 'Enter Message:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a Message or Command.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  askMutedID: () => {
    const questions = [
      {
        name: 'ChannelID',
        type: 'input',
        message: 'Enter the Channel you want to (un)mute (cant mute Users):',
        validate: function( value ) {
          if (client.channels.get(value)) {
            return true;
          } else {
            return 'Please enter the Channel you want to (un)mute.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  iq: () => {
   return inquirer;
  }
}
