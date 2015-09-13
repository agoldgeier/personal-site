var app = angular.module('2fCollective', ['ngRoute', 'ngMessages']);

// Routing
app.config(function($routeProvider, $locationProvider, $sceDelegateProvider) {
  	$routeProvider
		  .when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'HomeCtrl'
		  })
		  .when('/artists', {
		    templateUrl: 'views/artists.html',
		    controller: 'ArtistsCtrl'
		  })
		  .when('/artists/:artist', {
		    templateUrl: function(urlattr) {
		    	return 'views/artists/' + urlattr.artist + '.html';
		    },
		    controller: 'ArtistCtrl'
		  })
		  .when('/albums', {
		    templateUrl: 'views/albums.html',
		    controller: 'AlbumsCtrl'
		  })
		  .when('/albums/:album', {
		    templateUrl: function(urlattr) {
		    	return 'views/albums/' + urlattr.album + '.html';
		    },
		    controller: 'AlbumCtrl'
		  })
		  .when('/videos', {
		    templateUrl: 'views/videos.html',
		    controller: 'VideosCtrl'
		  })
		  .when('/contacts', {
		    templateUrl: 'views/contacts.html',
		    controller: 'ContactsCtrl'
		  })
		  .when('/blog', {
		    templateUrl: 'views/blog.html',
		    controller: 'BlogCtrl'
		  })
		  .otherwise('/');


		  // UNCOMMENT TO GET RID OF #'s
		  // $locationProvider.html5Mode(true); 
	$sceDelegateProvider.resourceUrlWhitelist([
	    'self',
	    'https://www.youtube.com/**',
	    'https://w.soundcloud.com/**'
	]);
});

// Directives
// app.directive("artistTile", function() {
// 	// this is repeated on a grid in artists.html
// 	return {
// 		restrict: 'E',
// 		templateUrl: "artist-tile.html"
// 	};
// });

app.directive("artist", function() {
	return {
		restrict: 'E',
		templateUrl: "views/artists/artist.html"
	};
});

app.directive("artistheader", function() {
	return {
		restrict: 'E',
		templateUrl: "views/artists/artist-header.html"
	};
});

app.directive("album", function() {
	return {
		restrict: 'E',
		templateUrl: "views/albums/album.html"
	};
});

app.directive('ngSoundcloud', function($http) {
  function link(scope) {
    var clientid = 'b23455855ab96a4556cbd0a98397ae8c';
    $http({
      method: 'GET',
      url: 'http://api.soundcloud.com/tracks/' + scope.track + '.json?client_id=' + clientid
    }).
    success(function(data) {
      scope.band = data.user.username;
      scope.bandUrl = data.user.permalink_url;
      scope.title = data.title;
      scope.trackUrl = data.permalink_url;
      scope.albumArt = data.artwork_url.replace("large", "t500x500");
      scope.wave = data.waveform_url;
      scope.stream = data.stream_url + '?client_id=' + clientid;
      scope.song = new Audio();
    });
    scope.playing = false;
    scope.play = function() {
      scope.playing = !scope.playing;
      if (!scope.playing) {
        scope.song.pause();
      } else {
        if (scope.song.src == '') {
          scope.song.src = scope.stream;
        }
        scope.song.play();
      }
    }
  }
  return {
    restrict: 'E',
    scope: {
      track: '=track',
    },
    template: document.getElementById('template').innerHTML,
    link: link
  };
});
