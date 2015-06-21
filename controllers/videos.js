angular.module('2fCollective')
  .controller('VideosCtrl', function($scope, Page, $routeParams, $http) {

  	Page.setTitle('Videos');

  	$http.get('videos.json').success(function(data) {
      $scope.videos = data;
    });

  	$scope.getIframeSrc = function(src) {
  		return 'https://www.youtube.com/embed/' + src;
	};

    function updateInfo() {
      $scope.$apply();
    }
 
  });