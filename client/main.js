import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



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