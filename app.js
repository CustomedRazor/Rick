// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.
const embed = require("./embeds.js");

// Require
var block = require('./blockwords.js');
var ads = require('./advertisment.js');
var math = require('./math.js');

client.on("ready", () => {
  console.log(`Loaded Main Query`);
  client.user.setPresence({ game: { name: 'discord.io/grim' }, status: 'dnd' })
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setPresence({ game: { name: 'discord.io/grim' }, status: 'dnd' })
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setPresence({ game: { name: 'discord.io/grim' }, status: 'dnd' })
});

// Add Role on join
client.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', 'Member');
    member.addRole(role)
  });
client.login(config.token);
