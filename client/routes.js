Router.route('/', function () {

  this.render('songRequest', {
      songUrl : function(){
       return Session.get('songUrl');
      }
  });
});
Router.route('/song', function () {
  this.render('songRequest');
});

Router.route('/login', function(){
  this.render('loginForm');
});
Router.route('/video', function(){
  this.render('player');
});

Router.route('/chat',function(){
	this.render('chat');
});

Router.configure({
  layoutTemplate: 'app'
});

Router.route('/chat/:channel', function () {
	Session.set('channel', this.params.channel);
	this.render('messages');
});

Router.route('/general', function () {
	this.redirect('/general');
});