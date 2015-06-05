angular.module('2fCollective')
  .controller('HomeCtrl', function($scope, Page, $routeParams, $http) {

  	Page.setTitle('Home');

  	$http.get('albums.json').success(function(data) {
    	$scope.albums = data;

        var featured = ["The River Looks Beautiful", 
  		"The River Looks Beautiful1", "The River Looks Beautiful2", 
  		"The River Looks Beautiful3"];

  		$scope.featuredAlbums = {};
  		for (var i = 0; i < 4; i++) {
  			$scope.featuredAlbums[featured[i]] = $scope.albums[featured[i]];
  		}
      console.log($scope.albums);
    });



 
  });