const Discord = require("discord.js")
const bot = new Discord.Client()
var prefix = "/"
          



bot.on("ready", function () {
    bot.user.setActivity("by !LuapMc#9493")
    console.log('je suis pret')
})

bot.login(process.env.TOKEN)
