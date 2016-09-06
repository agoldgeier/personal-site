var app = angular.module('PersonalSite', ['ngRoute', 'ngMessages']);

// Routing
app.config(function($routeProvider, $locationProvider, $sceDelegateProvider) {
  	$routeProvider
		  .when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'HomeCtrl'
		  })
		  .when('/projects', {
		    templateUrl: 'views/projects.html',
		    controller: 'ProjectsCtrl'
		  })
		  .when('/projects/:project', {
		    templateUrl: function(urlattr) {
		    	return 'views/projects/' + urlattr.project + '.html';
		    },
		    controller: 'ProjectCtrl'
		  })
		  .when('/cv', {
		    templateUrl: 'views/cv.html',
		    controller: 'CVCtrl'
		  })
		  .when('/music', {
		    templateUrl: 'views/music.html',
		    controller: 'MusicCtrl'
		  })
		  .otherwise('/');

	$sceDelegateProvider.resourceUrlWhitelist([
	    'self',
	    'https://www.youtube.com/**',
	    'https://w.soundcloud.com/**'
	]);

	$locationProvider.hashPrefix('!')
});

// Directives

app.directive("project", function() {
	return {
		restrict: 'E',
		templateUrl: "views/projects/project.html"
	};
});

app.directive("dir-disqus", function() {
	return {
		restrict: 'E',
		templateUrl: "views/projects/project.html"
	};
});
