angular.module('2fCollective')
  .controller('ArtistsCtrl', function($scope, Page, $routeParams, $http) {

    $http.get('artists.json').success(function(data) {
      $scope.artists = data;
    });

    Page.setTitle('Artists');

  	$scope.name = $routeParams.artist; // temporary
    // console.log('Current artist: ' + $scope.name);

  	// $scope.setArtist = function(e) {
  	// 	var name = $(e.target).data('id');
  	// 	console.log(name);
  	// }

    $scope.makeArtistLink = function(name) {
      return "/#/artists/" + name.replace(/ /g,'');
    }

  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }
 
  });