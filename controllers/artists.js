angular.module('2fCollective')
  .controller('ArtistsCtrl', function($scope, Page) {

  var artists;
  $.getJSON("artists.json", function(data) {
     artists = data;
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