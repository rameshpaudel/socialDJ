Template.chat.helpers({
	chats: function(){
		console.log(Chat.find({}, { sort: { time: -1}}));
		return Chat.find({}, { sort: { time: -1}});
	}
});


Template.chat.events = {
	'keydown input#message' : function (event) {
		if (event.which == 13) { // 13 is the enter key event
		  if (Meteor.user()){
		    var username = Meteor.user().profile.name;
		  }else{
		    var username = 'Anon';
		}
		  var message = document.getElementById('message');
		  if (message.value != '') {
		    Meteor.call('addMessage', username, message.value , function (error, result) {});

		    document.getElementById('message').value = '';

		    
		  }
		}
	}
}
Session.set('chapp-username','Desired Username'); //you could set the user name on user login
 //The room identifier. Iron router's before action can be a great spot to set this.