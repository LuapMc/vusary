const Discord = require("discord.js")
const bot = new Discord.Client()
var prefix = "/"
          
bot.on("message" , function (message) {
     if (message.content === "/ping") {
       message.channel.sendMessage("Temps de latence avec le serveur ‘" + ‘ ${message.createdTimestamp - Date.now()}’ + " ms "’ ")
     }
})

bot.on('message', message => {
if (message.content === prefix + "help"){
message.channel.sendMessage("Liste des commandes: **```\n -/help  \n -/ping  \n  -Salut```**");
}

if(message.content === "Salut"){
message.reply("Bien le bonjour. :D");
console.log("Commande Salut effectué");
}
});



bot.on("ready", function () {
bot.user.setActivity("by !LuapMc#9493")
console.log('je suis pret')
})

bot.login(process.env.TOKEN)
