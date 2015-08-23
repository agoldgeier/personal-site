angular.module('2fCollective')
  .controller('AlbumsCtrl', function($scope, Page, $routeParams, $http) {

  	$http.get('albums.json').success(function(data) {
      $scope.albums = data;

      // Create array of ordered album names
      $scope.albumOrder = Object.keys($scope.albums);
      $scope.albumOrder.sort(function(x, y){
        x_ordinal = $scope.albums[x]["ordinal"];
        y_ordinal = $scope.albums[y]["ordinal"];
        return x_ordinal < y_ordinal;
      })

      // Create ordered array of albums
      $scope.albumsInOrder = []
      for (var i = 0; i < $scope.albumOrder.length; i++) {
        $scope.albumsInOrder.push($scope.albums[$scope.albumOrder[i]])
      }

    });


    $scope.makeLink = function(name) {
      return "/#/albums/" + name.toLowerCase().replace(/ /g,'-');
    }
    
  	Page.setTitle('Albums');
 
  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }

  });