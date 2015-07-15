angular.module('2fCollective')
  .controller('VideosCtrl', function($scope, Page, $routeParams, $http) {

  	Page.setTitle('Videos');

  	$http.get('videos.json').success(function(data) {
      $scope.videos = data;

      var list = ["6", "5", "4", "3", "2", "1"];

      $scope.videosInOrder = [];
      for (var i = 0; i < 6; i++) {
        $scope.videosInOrder[i] = $scope.videos[list[i]];
      }
    });

  	$scope.getIframeSrc = function(src) {
  		return 'https://www.youtube.com/embed/' + src;
	};

    function updateInfo() {
      $scope.$apply();
    }
 
  });