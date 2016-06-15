Router.map(function () {
    this.route('route', {
        path: '/video',
        where: 'server',
        action: function() {
            //If the route of server matches the route on frontend
            if (this.request.method != 'GET') {
                YoutubeApi.authenticate({
                    type: 'key',
                    key: 'AIzaSyAUcc1QXOt3BQMjxUTiH3X_r1hNAufvffc'
                });

                YoutubeApi.channels.list({
                    "part": "id",
                    "mySubscribers": true,
                    "maxResults": 50
                }, function (err, data) {
                    console.log(err, data);
                });
                
            } else {
                this.response.writeHead(404);
            }
        }
    })
});