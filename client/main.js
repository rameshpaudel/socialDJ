import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
Template.songRequest.helpers({
	songUrl: function() {
		return Meteor.call('searchVideo',Session.get('songUrl'));
	}
});
Template.songRequest.events({
	'submit #songRequest': function (event) {
        event.preventDefault();
        var songUrl = event.target.url.value;

        Session.set("songUrl", songUrl);

        return Router.go('video');

	}
});
/*Authenticating the user to fetch the data from youtube*/
/*YoutubeApi.authenticate({
    type: 'Browser',
    key: 'AIzaSyBvDQqg3zszpBHiw5B8gEMhfBFMt3h_ZPE'
});
Meteor.methods({
    searchVideo: function(search) {
        YoutubeApi.search.list({
            part: "id",
            type: "video",
            maxResults: 5,
            q: search,
        }, function (err, data) {
            console.log(err, data);
        });
    }
});

Loading youtube in a model

  Template.modal.rendered = function() {
    $('#myModal').on('show.bs.modal', function(event) {
      var modal, src;
      modal = $(this);
      return modal.find('iframe').attr('src', Session.get('songUrl'));
    });
    return $('#myModal').on('hide.bs.modal', function(event) {
      var modal;
      modal = $(this);
      return modal.find('iframe').attr('src', '');
    });
  };

  console.log(Session.get('songUrl'));*/