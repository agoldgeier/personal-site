angular.module('PersonalSite')
  .controller('ProjectCtrl', function($scope, Page, $routeParams, $http) {

  	$scope.disqusConfig = {}

    $scope.init = function(title) {
      $scope.title = title;
      $scope.disqusConfig = {
    	disqus_shortname: 'aviv-goldgeier',
   		disqus_identifier: title,
    	disqus_url: "http://www.avivgoldgeier.com/#!/projects/" + title.toLowerCase().replace(/ /g,'-')
	  };
    }

    $http.get('projects.json').success(function(data) {
      $scope.project = data[$scope.title];
      // console.log($scope.project);
    });

    $scope.makeLink = function(name) {
      return "#!/projects/" + name.toLowerCase().replace(/ /g,'-');
    }

  });