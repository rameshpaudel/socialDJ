import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

// Youtube Authentication
YoutubeApi.authenticate({
    type: 'key',
    key: 'AIzaSyBvDQqg3zszpBHiw5B8gEMhfBFMt3h_ZPE'
});

YoutubeApi.channels.list({
    "part": "id",
    "mySubscribers": true,
    "maxResults": 50
}, function (err, data) {
    console.log(err, data);
});
