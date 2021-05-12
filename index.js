

const keepAlive = require("./server")

const Discord = require("discord.js")

//const Database = require("@replit/database")

//const db = new Database()
const client = new Discord.Client()

//const fetch = require("node-fetch")





client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  
})



//let numberofnights=0;
var players = {}





client.on("message", msg => {
  if(msg.author.bot) return

  else if(msg.content.startsWith("!restart")){
    players={}
    msg.channel.send("restarted!")
  }

  else{
    let commandHandler=require("./command")
    commandHandler(msg, players)
  }
  
  msg.channel.send("Commands: !+enroll/start/vote/restart")
})




keepAlive()
client.login(process.env['TOKEN'])


