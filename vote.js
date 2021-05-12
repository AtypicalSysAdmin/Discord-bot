module.exports=function(msg,players){
  let mentions=msg.mentions.users.array()
  msg.channel.send(`voted for: ${mentions[0].tag} and ${mentions[1].tag}`)
}