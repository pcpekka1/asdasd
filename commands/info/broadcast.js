const Discord = require("discord.js");
const superagent = require("superagent");
const bot = new Discord.Client();

module.exports = {
  name: "broadcast",
  category: "info",
  description: "Says text :/",
  usage: "broadcast",
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

        var embed = new Discord.RichEmbed()

        .setColor("RANDOM")
        .setTitle("Felhívás")
        .setDescription("Felhívó: " + message.author)
        .addField("Felhívás tartalma: ", + argsresult )

        message.channel.send(embed)
    }

    }
}
