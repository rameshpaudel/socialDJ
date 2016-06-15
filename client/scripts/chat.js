Template.chat.helpers({
	chats: function(){
		return Messages.find({}, { sort: { time: -1}}).fetch();
	}
});


Template.chat.events = {
	'keydown input#message' : function (event) {
		console.log(document.getElementById('message').value);
		if (event.which == 13) { // 13 is the enter key event
			event.preventDefault();
		  if (Meteor.user()){
		    var username = Meteor.user().profile.name;
		  }else{
		    var username = 'Anonymous';
		}
		  var message = document.getElementById('message');
		  if (message.value != '') {
		    //Meteor.call('addMessage', username, message.value , function (error, result) {});
		       Messages.insert({
	              name: username,
	              message: message.value,
	              time: Date.now(),
	            });
		    document.getElementById('message').value = '';
		    message.value = '';
		    
		  }
		}
	}
}
//console.log(Meteor.user());
//Session.set('chapp-docid','uniqueIdentifier'); //The room identifier. Iron router's before action can be a great spot to set this.