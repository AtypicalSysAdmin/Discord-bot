

const keepAlive = require("./server")

const Discord = require("discord.js")




const client = new Discord.Client()







client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  
})




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
client.login(process.env['TOKEN']) //gotta get this from discord and add your bot in your dev acc


