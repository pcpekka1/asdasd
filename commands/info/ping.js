const Discord = require("discord.js");
const superagent = require("superagent");
const bot = new Discord.Client();

module.exports = {
  name: "ping",
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Pong! :ping_pong:")
    .setDescription("PekkaBot pingje")
    .addField(":ping_pong: Ping: ", `**${Math.round(bot.ping)}ms**`)

    message.channel.send(embed)
  }

}
