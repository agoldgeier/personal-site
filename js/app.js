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
