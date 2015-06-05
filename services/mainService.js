angular.module('2fCollective')
	.factory('Page', function(){
	  var title = 'default';
	  return {
	    title: function() { return title; },
	    setTitle: function(newTitle) { title = newTitle; }
	  };
	});