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
message.channel.sendMessage("Liste des commandes: **```\n -/help  \n -/ping  \n -Salut  \n -Hello  \n -/say  \n -/ban (InDev)```**");
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

bot.on("message", message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.lenght).split(/ +/);
    command = args.shift().toLowerCase();



    //BAN

    if(command === "/ban") {
       let modRole = message.guild.roles.find("name", "staff"); {
            return message.reply("Tu n'as pas les permession de faire cette commande.").catch(console.error);
       }
       const member = message.mentions.members.fisrt();
       if(!member) return message.reply("Merci de mentionner l'utilisateur a bannir !")
       member.ban().then(member => {
           message.reply(${member.user.username} On se revoie dans quelque mois Inchalla).catch(console.error);
           message.guild.channels.find("name" , "general").send(**${member.user.name} a été banni par **${message.author.usernamme}**)
        }).catch(console.error)
}})



bot.on("ready", function () {
bot.user.setActivity("Owner : LuapMc /")
console.log('je suis pret')
})

bot.login(process.env.TOKEN)
