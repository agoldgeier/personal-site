var app = angular.module('2fCollective', ['ngRoute', 'ngMessages']);

// Routing
app.config(function($routeProvider, $locationProvider) {
  	$routeProvider
		  .when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'HomeCtrl'
		  })
		  .when('/artists', {
		    templateUrl: 'views/artists.html',
		    controller: 'ArtistsCtrl'
		  })
		  .when('/artists/BXTR', {
		    templateUrl: 'views/artists/bxtr.html',
		    controller: 'ArtistCtrl'
		  })
		  .when('/artists/:artist', {
		    templateUrl: 'views/artists.html',
		    controller: 'ArtistsCtrl'
		  })
		  .when('/albums', {
		    templateUrl: 'views/albums.html',
		    controller: 'AlbumsCtrl'
		  })
		  .when('/albums/:album', {
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
});

// Controllers

// Directives
// app.directive("artistTile", function() {
// 	// this is repeated on a grid in artists.html
// 	return {
// 		restrict: 'E',
// 		templateUrl: "artist-tile.html"
// 	};
// });
