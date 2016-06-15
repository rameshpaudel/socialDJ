App = {};
Schemas = {};

/*Messages.attachSchema(Schemas.Chat);

Schemas.Messages = new SimpleSchema({
	username:{
		type: String,
		label: 'Username'
	},
    message: {
        type: String,
        label: "Message",
        max: 200
    },
    time:{
    	type: Date,
    	label: 'Time',
    	
    }
});
*/
/*chatReply = function(message){
	var username = Meteor.user();
	console.log(username);
  	return Chat.insert({
  		user: username,
    	msg: message,
    	time: Date.now()

  	},
  { validationContext: "insertForm" }, function(error, result) {
    //The list of errors is available by calling Books.simpleSchema().namedContext("insertForm").invalidKeys()
  });
}

getAllChat = function(){
	return Chat.find({}, { sort: { time: -1}});
}*/