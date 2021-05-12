module.exports=function(msg,players){
  if (Object.keys(players).length>0){
      msg.channel.send("Game begins! Start discussing!")
      
    }
    else{
      msg.channel.send("Not enough players to play!")
    }
}