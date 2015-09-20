angular.module('2fCollective')
  .controller('ArtistCtrl', function($scope, Page, $routeParams, $http) {

    $scope.init = function(name) {
      $scope.name = name;
    }

    $http.get('artists.json').success(function(data) {
      $scope.artist = data[$scope.name];
      console.log($scope.artist);
    });

    $scope.tab = 1;

    $scope.isSet = function(checkTab) {
    	
        return $scope.tab === checkTab;
    };

    $scope.setTab = function(activeTab) {
        $scope.tab = activeTab;
    };

    $scope.makeLink = function(name) {
      return "/#/albums/" + name.toLowerCase().replace(/ /g,'-');
    }

  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }
 
});