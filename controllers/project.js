angular.module('PersonalSite')
  .controller('ProjectCtrl', function($scope, Page, $routeParams, $http) {

    $scope.init = function(title) {
      $scope.title = title;
    }

    $http.get('projects.json').success(function(data) {
      $scope.project = data[$scope.title];
      // console.log($scope.project);
    });
  });