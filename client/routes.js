Router.route('/', function () {

  this.render('songRequest', {
      songUrl : function(){
       return Session.get('songUrl');
      }
  });
});
Router.route('/song', function () {
  this.render('modal');
});

Router.route('/login', function(){
  this.render('loginForm');
});
Router.route('/video', function(){
  this.render('player');
});

Router.route('/chat',{
	action: function () {
    // render all templates and regions for this route
    
	this.render('chapp_form');
  	},
	onBeforeAction: function () {
		Session.set('chapp-docid','uniqueIdentifier');
	},

});