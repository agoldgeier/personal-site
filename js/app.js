angular.module('2fCollective', ['ngRoute', 'ngMessages'])
  .config(function($routeProvider, $locationProvider) {

  	// Provides routing
  	$routeProvider
		  .when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'HomeCtrl'
		  })
		  .when('/artists', {
		    templateUrl: 'views/artists.html',
		    controller: 'ArtistsCtrl'
		  })
		  .when('/artists/:id', {
		    templateUrl: 'views/artists.html',
		    controller: 'ArtistsCtrl'
		  })
		  .when('/albums', {
		    templateUrl: 'views/albums.html',
		    controller: 'AlbumsCtrl'
		  })
		  .when('/videos', {
		    templateUrl: 'views/videos.html',
		    controller: 'VidCtrl'
		  })
		  .when('/contact', {
		    templateUrl: 'views/contact.html',
		    controller: 'ContactCtrl'
		  })
		  .when('/blog', {
		    templateUrl: 'views/blog.html',
		    controller: 'BlogCtrl'
		  })
		  .otherwise('/');


		  // UNCOMMENT TO GET RID OF #'s
		  // $locationProvider.html5Mode(true);
 
  });