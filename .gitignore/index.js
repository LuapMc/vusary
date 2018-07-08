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
message.channel.sendMessage("Liste des commandes: **```\n -/help  \n -/ping  \n  -Salut```**");
}

if(message.content === "Salut"){
message.reply("Bien le bonjour. :D");
console.log("Commande Salut effectué");
}
});

bot.on("ready", () => {

bot.on('message', message => {
if(msg.content.startsWith(prefix + "ping")) {
var now = require('performance-now');
var startTime = now();
message.channel.send("pong + wait...")
.then(message => {
var endTime = now();
return message.edit("pong ping_pong = " + Math.round(endTime - startTime) + " ms.");
}).catch(console.error);

bot.on("ready", function () {
bot.user.setActivity("by !LuapMc#9493")
console.log('je suis pret')
})

bot.login(process.env.TOKEN)
