/*// YouTube API will call onYouTubeIframeAPIReady() when API ready.
    // Make sure it's a global variable.
    onYouTubeIframeAPIReady = function () {

        // New Video Player, the first argument is the id of the div.
        // Make sure it's a global variable.
        player = new YT.Player("player", {

            height: "400", 
            width: "600", 

            // videoId is the "v" in URL (ex: http://www.youtube.com/watch?v=LdH1hSWGFGU, videoId = "LdH1hSWGFGU")
            videoId: Session.get('songUrl'), 

            // Events like ready, state change, 
            events: {

                onReady: function (event) {

                    // Play video when player ready.
                    event.target.playVideo();
                }

            }

        });

    };
    Template.player.rendered = function () {

        YT.load();
        
    };*/

    Template.player.rendered = function() {
      /* 2. This code loads the IFrame Player API code asynchronously. */
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      /* 3. This function creates an <iframe> (and YouTube player) */
      /*    after the API code downloads. */
      var player;
      onYouTubeIframeAPIReady = function() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: Session.get('songUrl'),
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      };

      /* 4. The API will call this function when the video player is ready. */
      onPlayerReady = function(event) {
        event.target.playVideo();
      };

      /* 5. The API calls this function when the player's state changes. */
      /*    The function indicates that when playing a video (state=1), */
      /*    the player should play for six seconds and then stop. */
      var done = false;
      onPlayerStateChange = function(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      };
      stopVideo = function() {
        player.stopVideo();
      };
};