const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("606044886445064213")
setInterval(function() {
channel.send(`تم دعس من قبل حمزة حمزة حمزة حمزة حمزة حمزة حمزة حمزة حمزة حمزة حمزة حمزة
`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
