# discord-cli
A way to use Discord over a CLI using a bot account.

Having trouble installing/using even after reading the whole file below? Friend and then DM R2D2Vader#0693 `(517742819830399000)` on Discord for help. 

Do you think this is against the Discord TOS? It's not. Read more [here](https://github.com/Susul-1312/discord-cli#legality).

# Instructions for installation

## Prerequisites

Node.js installed (get it from https://nodejs.org/)

Download the project as a .zip file from the menu above. Click "Clone or Download" at the right of the navbar just above the files, and then "Download Zip".

Extract the contents of the .zip file to your chosen location.

## Discord Bot Setup

Head over to https://discord.com/developers/applications/, sign in with your Discord account, and click "New Application" at the top right.

Give it a name and set the team to "Personal", then click "Create".

Head down to the "Bot" menu from the left hand navbar and click "Add bot". Click "Yes" when the confirmation pops up.

Give the bot a neat avatar if you wanna from the resulting page.

Look for the word "Token" right under the Username field. Click "Copy" below the token.

Head back to the place you extracted the files to earlier. Open `index.js` in a text editor (Notepad works fine). Look for a place that says `client.login("your token")` and paste your bot's token **inbetween the quotation marks**, to replace the text `your token`. 

Head back to Discord Developer Portal. Select the "OAuth2" tab from the left hand navbar. Scroll down to the box marked "Scopes" (one with a lot of check boxes) and check the check box within it that says "bot". 

Scroll down further to the box marked "Bot Permissions" (another one with a lot of check boxes) and select the following boxes:
```View Channels
Send Messages
Embed Links
Attach Files
Read Message History
```
Now look at the bottom of the "Scopes" box. You should see a Discord Bot Invite link. Copy it and send it to the owners of any server you want to chat on. They will have to add the bot by clicking on the link.

Time to head to your CLI.

## Initial CLI setup

Open your CLI and navigate to the folder which contains the files from the .zip file. 

`cd C:\Users\You\Example\Location` (IDK how that works on Mac)

Install the packages by using the following command:

`npm install chalk clear clui figlet inquirer minimist discord.js@11.x` 

*NOTE: Must use Discord.js 11 or it breaks*

# Using the tool

Open your CLI and navigate to the tool's folder (the folder which you extracted the files to). 

`cd C:\Users\You\Example\Location` (IDK how that works on Mac)

Run the following command to start the tool:
`node index.js`

You will be prompted to provide a channel. Please provide a Channel ID. Go to Discord, make sure Developer Mode is enabled, right-click on the channel you want to chat in, and select "Copy ID". Paste this into your CLI (no spaces before or after or the program breaks).

You can now send messages, as the bot user, into the selected channel!

All messages readable by the bot will appear in your CLI.

To change channel, enter `ch` or `channel` into the Send Message field and press enter. Then, as prompted, enter the new Channel ID.

To exit, type `q`, `quit`, or `exit`.

To mention users, you'll need their ID.  Go to Discord, make sure Developer Mode is enabled, right-click on the user you want to mention, and select "Copy ID". Then, type the snippet below, replacing UserID with the user's ID:

`<@UserID>`

For example: `<@496947965135683606>`

If you give the bot role mentioning perms (via Roles in Discord, Google how to do that), you can mention roles, using their IDs, like so:

`<@&RoleID>`

For example: `<@&669204767716933649>`

# Legality

Discord's TOS prohibits both self-bots and alternative clients. Both of these involve a program pretending to be a user. This tool is the opposite, because it involves a user pretending to be a bot. There are no restrictions imposed by Discord that prevent a user from chatting via a bot account. Discord knows that you're coding bots to perform whatever task you want to (within reason), so there's no reason why you can't utilise a bot to send messages you type in rather than pre-coded messages.

