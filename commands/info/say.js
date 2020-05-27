const Discord = require("discord.js");
const superagent = require("superagent");
const bot = new Discord.Client();

module.exports = {
  name: "say",
  category: "info",
  description: "Says text :/",
  usage: "say",
  run: (client, message, args) => {
    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Nincs jogod ehhez! szükséges jog: MANAGE_MESSAGES, ADMINISTRATOR!")

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }

    }
}
