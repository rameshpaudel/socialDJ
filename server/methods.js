Meteor.startup(function () {
  Meteor.methods({
    
    sendMsg: function(msg){
      return chatReply(msg);
    },
    addMessage: function(username,message){
       Chat.insert({
          username: username,
          message: message,
          time: Date.now(),
        });
    }

  });
});


