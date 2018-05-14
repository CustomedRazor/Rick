/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client({disableEveryone: true});

// The token of your bot - https://discordapp.com/developers/applications/me
const config = require('./config.json');
let prefix = "+++";

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('Loaded command Query');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === config.prefix + 'stats') {
    // Send "pong" to the same channel
    message.channel.send(`The Rick Bot Stats \nGuilds: **${client.guilds.size}** \nUsers: **${client.users.size}** \nUptime: **${client.uptime}** `);
  }

let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

if(message.content === `${prefix}serverinfo`){

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Information")
  .setColor("#15f153")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

});

// Log our bot in
client.login(config.token);
