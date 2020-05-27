const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Nincs jogod ehhez`)
    }

    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Nincs jogod ehhez`)
    }

    let target = message.mentions.members.first();

    if(!target) {
      return message.channel.send(`**${message.author.username}**, Kérlek jelölj meg valakit!`)
    }

    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, Nem rúghatod ki magadat!`)
    }

  if(!args[1]) {
    return message.channel.send(`**${message.author.username}**, Kérlek adj indokot`)
  }

    let embed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kirúgott ${target} (${target.id})`)
    .setColor("#ff2050")
    .setFooter(`Általa: ${message.author.username}`);

    message.channel.send(embed)

    target.kick(args[1]);



  }
}
