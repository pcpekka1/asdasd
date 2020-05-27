const Discord = require("discord.js");
const superagent = require("superagent");
const bot = new Discord.Client();


module.exports = {
  name: "poll",
  category: "info",
  description: "Csinal egy szavazast",
  usage: "poll",
  run: (client, message, args) => {
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("Nincs jogod ehhez! szükséges jog: ADMINISTRATOR!")
    if (!args) return message.author.send('Nem hozhatsz létre tárgytalan szavazást!');
    message.delete();
    const embed = new Discord.RichEmbed()
        .setAuthor(`Szavazást indított ${message.author.tag}`, message.author.avatarURL)
        .setColor('#4DF10F')
        .setDescription(`${args.join(' ')}`)
        .setFooter('Szavazás | PekkaBot');
    const m = message.channel.send(embed);
    message.channel.fetchMessage(m).then(msg => msg.react(':white_check_mark:'));
    message.channel.fetchMessage(m).then(msg => msg.react(':x:'));
   }
}
