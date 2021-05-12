module.exports=function (msg, players){
   if(msg.content.startsWith("!enroll"))
  {
    let Enroll=require("./enroll")
    Enroll(msg,players)
  }

  else if(msg.content.startsWith("!start")){

    let Start=require("./start")
    Start(msg,players)
  }

  else if(msg.content.startsWith("!vote")){
    //message.mentions.users.array()

    let Vote=require("./vote")
    Vote(msg,players)
  }

  else{
    return
  }
}