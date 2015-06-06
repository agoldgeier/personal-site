angular.module('2fCollective')
  .controller('ArtistsCtrl', function($scope, Page, $routeParams, $http) {

<<<<<<< Updated upstream

    $http.get('artists.json').success(function(data) {
      $scope.artists = data;
    });
=======
    // Not working
    $http.get('test-artist.json').success(function(data) {
      $scope.artist = data;
    });

    console.log($scope.artist.bio);
>>>>>>> Stashed changes

    Page.setTitle('Artists');

  	$scope.name = $routeParams.artist; // temporary
    console.log('Current artist: ' + $scope.name);

  	// $scope.setArtist = function(e) {
  	// 	var name = $(e.target).data('id');
  	// 	console.log(name);
  	// }



  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }
 
  });