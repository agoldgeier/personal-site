angular.module('2fCollective')
  .controller('ArtistCtrl', function($scope, Page) {


    this.tab = 1;

    $scope.isSet = function(checkTab) {
    	
        return this.tab === checkTab;
    };

    $scope.setTab = function(activeTab) {
        this.tab = activeTab;
    };

  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }
 
});