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





if(msg.content.startsWith(prefix + 'ban')){

if(msg.channel.type === 'dm') return;

if(!msg.guild.member(msg.author).hasPermission('ADMINISTRATOR')){

return msg.reply("**❌ Vous n'avez pas la permissions d'utiliser cette commande**").catch(console.error);

}

if(msg.mentions.users.size === 0){

return msg.reply("**❌ Veuillez mentionner l'utilisateur que vous voulez ban**")

}

if(!msg.guild.member(client.user).hasPermission('ADMINISTRATOR')){

return msg.reply("**❌ Je n'ai pas la permission `ADMINISTRATOR` pour ban cet utilisateur**").catch(console.error);

}

let banMember = msg.guild.member(msg.mentions.users.first());

if(!banMember){

return msg.channel.send("**❌ Cet utilisateur n'est certainement pas valide**")

}

banMember.ban().then(member => {

msg.channel.send(`**${member.user.username}** a bien été ban**`);

})

}

bot.on("ready", function () {
bot.user.setActivity("Owner : LuapMc /")
console.log('je suis pret')
})

bot.login(process.env.TOKEN)
