angular.module('2fCollective')
  .controller('AlbumsCtrl', function($scope, Page, $routeParams, $http) {

  	$http.get('albums.json').success(function(data) {
      $scope.albums = data;

      var list = ["7", "6", "5", "4", "3", "2", "1"];

      $scope.albumsInOrder = [];
      for (var i = 0; i < 7; i++) {
        $scope.albumsInOrder[i] = $scope.albums[list[i]];
      }
    });


    $scope.makeArtistLink = function(name) {
      return "/#/artists/" + name.toLowerCase().replace(/ /g,'-');
    }
    
  	Page.setTitle('Albums');
 
  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }

  });