
let Randomproperty = require("./randomproperty")


module.exports=function (msg, players){
  let id=msg.author.id
    players[id]={role:"No role yet",numofvotes:0}
    
    msg.reply(msg.author.tag +" enrolled")
    msg.channel.send("Enrolled players:")
    for(var key in players) 
    {
    let value = players[key].numofvotes
    msg.channel.send(key+" : "+value)


    msg.channel.send("Randomproperty=> "+Randomproperty(players[key]))
    } 
}