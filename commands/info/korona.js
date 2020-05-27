const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();


module.exports = {
  name: "korona",
  category: "info",
  description: "Get the stats of corona",
  usage: "korona all or corona <country>",
  aliases: ["covid", "covid19"],
  run: async (message, args) => {

    if(!args.length) {
      return message.channel.send("Adj meg egy országot!")
    }

    if(args.join(" ") === "all") {
      let corona = await track.all() //it will give global cases

      let embed = new discord.MessageEmbed()
      .setTitle("Global Cases")
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Karanténban", corona.cases, true)
      .addField("Elhúnytak", corona.deaths, true)
      .addField("Gyógyultak", corona.recovered, true)
      .addField("Mai karanténban", corona.todayCases, true)
      .addField("Mai elhúnytak", corona.todayDeaths, true)
      .addField("Aktív karantén", corona.active, true);

      return message.channel.send(embed)



    } else {
      let corona = await track.countries(args.join(" ")) //change it to countries

      let embed = new discord.MessageEmbed()
      .setTitle(`${corona.country}`)
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Karanténban", corona.cases, true)
      .addField("Elhúnytak", corona.deaths, true)
      .addField("Gyógyultak", corona.recovered, true)
      .addField("Mai karanténban", corona.todayCases, true)
      .addField("Mai elhúnytak", corona.todayDeaths, true)
      .addField("Aktív karantén", corona.active, true);

      return message.channel.send(embed)


    }


  }
}
