const Discord = require("discord.js");
const client = new Discord.Client();
const embed = require("./embeds.js");
const app = require("./app.js");
const commandsfile = require('./commands.js');
const music = require('./music.js');
const soundboardfile = require('./soundboard.js');
const lilpump = require('./images/lil_pump.js');
var request = require("superagent");
//----------------------------------------------
var token = "NDM5MjEyMDU2MDM4NjA0ODIw.Dcffzg.VrM8dz1gblkh77C0i9apOSvbFhQ"
var prefix = ".n"
var discordbotsorgtoken = ""
var discordpwtoken = ""
//----------------------------------------------

client.on("ready", () => {
    console.log("Loaded NSFW Query");

    request
        .post(`yoyo`)
        .send(`{ "server_count": ${client.guilds.size},
    "shards": [${client.guilds.size}],
    "shard_count": ${client.guilds.size} }`)
        .type('application/json')
        .set('Authorization', discordpwtoken)
        .set('Accept', 'application/json')
        .end(err => {
            if (err) return console.error(err);
            console.log("Posted stats to bots.discord.pw!");
        });
});

client.on("guildCreate", guild => {

    request
        .post(`yoyo`)
        .send(`{ "server_count": ${client.guilds.size},
    "shards": [${client.guilds.size}],
    "shard_count": ${client.guilds.size} }`)
        .type('application/json')
        .set('Authorization', discordpwtoken)
        .set('Accept', 'application/json')
        .end(err => {
            if (err) return console.error(err);
            console.log("Posted stats to bots.discord.pw!");
        });
    request
        .post(`yoyo`)
        .send(`{ "server_count": ${client.guilds.size},
    "shards": [${client.guilds.size}],
    "shard_count": ${client.guilds.size} }`)
        .type('application/json')
        .set('Authorization', discordbotsorgtoken)
        .set('Accept', 'application/json')
        .end(err => {
            if (err) return console.error(err);
            console.log("Posted stats to discordbots.org!");
        });
});

client.on("guildDelete", guild => {

    request
    .post(`yoyo`)
    .send(`{ "server_count": ${client.guilds.size},
"shards": [${client.guilds.size}],
"shard_count": ${client.guilds.size} }`)
    .type('application/json')
    .set('Authorization', discordpwtoken)
    .set('Accept', 'application/json')
    .end(err => {
        if (err) return console.error(err);
        console.log("Posted stats to bots.discord.pw!");
    });
request
    .post(`yoyo`)
    .send(`{ "server_count": ${client.guilds.size},
"shards": [${client.guilds.size}],
"shard_count": ${client.guilds.size} }`)
    .type('application/json')
    .set('Authorization', discordbotsorgtoken)
    .set('Accept', 'application/json')
    .end(err => {
        if (err) return console.error(err);
        console.log("Posted stats to discordbots.org!");
    });
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.login(token);
