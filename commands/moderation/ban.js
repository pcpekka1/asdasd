const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Nincs jogod ehhez`)
    }

    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Nincs jogod ehhez!`)
    }

    const target = message.mentions.members.first();

    if(!target) {
      return message.channel.send(`**${message.author.username}**, jelölj meg valakit!.`)
    }

    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, Nem tudod saját magadat kitiltani!`)
    }



   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Kérlek adj meg indokot`)
   }

    let embed = new discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Banned by ${message.author.tag}`);

    message.channel.send(embed)
    target.ban(args[1])



  }
}
