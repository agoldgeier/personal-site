angular.module('2fCollective')
  .controller('HomeCtrl', function($scope, Page, $routeParams, $http) {

  	Page.setTitle('Home');

  	$http.get('albums.json').success(function(data) {
    	$scope.albums = data;

      var featured = ["7", "6", "5", "4"];

  		$scope.featuredAlbums = {};
  		for (var i = 0; i < 4; i++) {
  			$scope.featuredAlbums[featured[i]] = $scope.albums[featured[i]];
  		}
      //console.log($scope.albums);
    });

    $scope.makeArtistLink = function(name) {
      return "/#/artists/" + name.toLowerCase().replace(/ /g,'-');
    }



 
  });