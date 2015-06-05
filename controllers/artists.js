angular.module('2fCollective')
  .controller('ArtistsCtrl', function($scope, Page, $routeParams, $http) {


    $http.get('artists.json').success(function(data) {
      $scope.artists = data;
    });

    Page.setTitle('Artists');

  	$scope.name = 'bxtr'; // temporary

  	$scope.setArtist = function(e) {
  		var name = $(e.target).data('id');
  		console.log(name);
  	}



  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }
 
  });