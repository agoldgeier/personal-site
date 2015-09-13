angular.module('2fCollective')
  .controller('AlbumCtrl', function($scope, $sce, Page, $routeParams, $http) {

    $scope.init = function(name) {
      $scope.name = name;
    }

    $http.get('albums.json').success(function(data) {
      $scope.album = data[$scope.name];
      // console.log($scope.artist);
    });

    $scope.makeLink = function(name) {
      return "/#/artists/" + name.toLowerCase().replace(/ /g,'-');
    }

    $scope.makeEmbed = function(num) {
      return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/" + num + "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
    }

    $scope.trust = $sce.trustAsHtml;

  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }
 
});