const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Nincs jogod ehhez!"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Nincs jogod ehhez!");
    }

    const user = message.mentions.members.first();

    if(!user) {
      return message.channel.send("Kérlek jelölj meg valakit")
    }

    if(user.id === message.author.id) {
      return message.channel.send("Le lettél némítva");
    }


    let reason = args.slice(1).join(" ")


    if(!reason) {
      return message.channel.send("Kérlek adj meg egy indokot is!")
    }

  //TIME TO LET MUTED ROLE

    let muterole = message.guild.roles.cache.find(x => x.name === "Némított")


      if(!muterole) {
      return message.channel.send("Nincs ilyen rang: ```Muted```")
    }


   if(user.roles.cache.has(muterole)) {
      return message.channel.send("Már le van némítva!")
    }




    user.roles.add(muterole)

await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)

    user.send(`Le lettél némítva itt: **${message.guild.name}** Indok: \`${reason}\``)


//WE ARE DONE HERE

  }
};
