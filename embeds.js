const Discord = require('discord.js'); // Discord.js
const client = new Discord.Client(); // The Client Magical!
const config = require("./config.json"); // REQUIRED


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Loaded Embed Query`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
});

client.on("guildMemberRemove", function(member){
  let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL)
      .setFooter(`User left`)
      .setTimestamp()
      .setColor("#ff0800")
       const channel = member.guild.channels.find('name', 'member-log');
      channel.send(embed);
  });
  client.on("guildMemberAdd", function(member){
    let embed = new Discord.RichEmbed()
      .setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL)
        .setFooter(`User joined`)
        .setTimestamp()
        .setColor("#43ef57")
         const channel = member.guild.channels.find('name', 'member-log');
        channel.send(embed);
  });
  client.on("guildBanAdd", function(guild, user){
    let embed = new Discord.RichEmbed()
      .setAuthor(`${user.tag} (${user.id}) has been banned`)
        .setFooter(`User Banned`)
        .setTimestamp()
        .setColor("#ff0000")
         const channel = guild.channels.find('name', 'mod-log');
        channel.send(embed);
  });
  client.on("guildBanRemove", function(guild, user){
    let embed = new Discord.RichEmbed()
      .setAuthor(`${user.tag} (${user.id}) has been unbanned`)
        .setFooter(`User Unbanned`)
        .setTimestamp()
        .setColor("")
         const channel = guild.channels.find('name', 'mod-log');
        channel.send(embed);
  });
  client.on("guildUpdate", function(oldGuild, newGuild){
    let embed = new Discord.RichEmbed()
      .setAuthor(`${oldGuild} to ${newGuild}`)
        .setFooter(`Guild Updated`)
        .setTimestamp()
        .setColor("#ff0000")
        channel.send(embed);
  });
  // Login bot killamc.com
  client.login(config.token);
