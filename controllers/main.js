angular.module('2fCollective')
	.controller('MainCtrl', function($scope, Page) {

  	$scope.Page = Page;
  	console.log(Page);
 
  });