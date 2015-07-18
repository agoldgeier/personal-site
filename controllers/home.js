angular.module('2fCollective')
  .controller('HomeCtrl', function($scope, Page, $routeParams, $http) {

  	Page.setTitle('Home');

  	$http.get('featured.json').success(function(data) {
    	$scope.featured = data;

  		$scope.featuredInOrder = [];
  		for (var i = 0; i < 4; i++) {
  			$scope.featuredInOrder[i] = $scope.featured[i.toString()];
  		}
      //console.log($scope.albums);
    });

    $scope.makeArtistLink = function(name) {
      return "/#/artists/" + name.toLowerCase().replace(/ /g,'-');
    }



 
  });