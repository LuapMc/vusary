const Discord = require("discord.js")
const bot = new Discord.Client()
var prefix = "/"
          
bot.on("message" , function (message) {
     if (message.content === "/ping") {
       message.reply("m’appelle pas je suis occuper!")
     }
})

bot.on('message', message => {
if (message.content === prefix + "help"){
message.channel.sendMessage("Liste des commandes: **```\n -/help  \n -/ping  \n -Salut  \n -/infodiscord  \n -/sondage (LuapMc) \n -Hello  \n -/say  \n -/ban (InDev)```**");
}

if(message.content === "Salut"){
message.reply("Bien le bonjour. :D");
console.log("Commande Salut effectué");
}
});

bot.on("message" , function (message) {
     if (message.content === "Hello") {
       message.reply("Good Morning . :D")
     }
})

bot.on('message', msg => {
    if(msg.content.startsWith(prefix)) {
        let trucrandom = msg.content.split(prefix)[1]
        let commande = trucrandom.split(' ')[0]
        switch (commande) {
            case 'say':
                let phrase = msg.content.split(" ").slice(1).join(" ")
                msg.delete()
                msg.channel.send(phrase)
            break;
        
            default:
            break;
        }
    }
})


bot.on('message', message => {

 if(message.content === prefix + "infodiscord") {
  var embed = new Discord.RichEmbed()
  .setDescription("Information du Discord")
  .addField("Nom Du Discord", message.guild.name)
  .addField("Crée le", message.guild.createdAt)
  .addField("Tu as rejoin le", message.member.joinedAt)
  .addField("Utilisateurs sur le discord", message.guild.memberCount)
  .setColor("0x0000FF")
 message.channel.sendEmbed(embed)

 }

 if (message.content.startsWith(prefix + "sondage")) {
  if(message.author.id == "296611013401247744"){
   let args = message.content.split(" ").slice(1);
   let thingToEcho = args.join(" ")
   var embed = new Discord.RichEmbed()
    .setDescription("Sondage")
    .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
    .setColor("0xB40404")
    .setTimestamp()
   message.guild.channels.find("name", "sondage").sendEmbed(embed)
   .then(function (message) { 
    message.react("✅")
    message.react("❌")
   }).catch(function() {
   });
   }else{
    return message.reply("Tu n'as pas la permission.")
}}})


bot.on("message" , function (message) {
     if (message.content === "/owner") {
       message.reply("Mon Créateur c'est !LuapMc#9493 :D")
     }
})

 bot.on("message" , function (message) {
     if (message.content === "/stop") {
       message.reply("Je M'eteins dans quelques secondes...⏱")
     }
})


    bot.on(message.content === "help") {

  var embed = new Discord.RichEmbed()
      .setDescription(`Help Menu`)
      .addField("/help")
      .addField("/ping")
      .addField("Salut ")
      .addField("/si (ServerInfo")
      .addField("/sondage(Owner)")
      .addField("/say")
      .addField("/ban(InDev)")
      .addField("/kick(InDev)")
      .addField("Hello")
      .setColor("#FFFB35")

  message.channel.sendEmbed(embed)
}


 




bot.on("ready", function () {
bot.user.setActivity("cmd: /help , Im VusaryBot")
console.log('je suis pret')
})


bot.login(process.env.TOKEN)
