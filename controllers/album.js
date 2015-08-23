angular.module('2fCollective')
  .controller('AlbumCtrl', function($scope, Page, $routeParams, $http) {

    $scope.init = function(name) {
      $scope.name = name;
    }

    $http.get('albums.json').success(function(data) {
      $scope.album = data[$scope.name];
      // console.log($scope.artist);
    });

  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }
 
});