Discord = require("discord.js");
client = new Discord.Client();
var prefix = "*";
var mention = "<@444228177351671819>"

client.on("ready", () => {
var servers = client.guilds.array().map(g => g.game).join(',');
console.log('Im ready');
});
var messages = [];
client.on('message', msg =>{ 
       if(msg.content.startWith(prefix + " Test")) {
           message.channel.send('5/5'); 
    }
})
 

client.login(process.env.TOKEN)
