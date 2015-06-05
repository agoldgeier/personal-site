angular.module('2fCollective')
  .controller('AlbumsCtrl', function($scope, Page, $routeParams, $http) {

  	$http.get('albums.json').success(function(data) {
      $scope.albums = data;
    });

  	Page.setTitle('Albums');
 
  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }

  });