angular.module('PersonalSite')
  .controller('ProjectsCtrl', function($scope, Page, $http, $routeParams) {

    $http.get('projects.json').success(function(data) {
      $scope.projects = data;
    });

    Page.setTitle('Projects');

  	$scope.name = $routeParams.project; // temporary
    // console.log('Current artist: ' + $scope.name);

  	// $scope.setArtist = function(e) {
  	// 	var name = $(e.target).data('id');
  	// 	console.log(name);
  	// }

    $scope.makeLink = function(name) {
      return "#!/projects/" + name.toLowerCase().replace(/ /g,'-');
    }

  	// THIS IS CALLED AFTER TO UPDATE THE SCOPE
    function updateInfo() {
      $scope.$apply();
    }
 
  });