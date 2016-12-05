angular.module('PersonalSite')
  .controller('ClicheCtrl', function($scope, $http, Page) {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

	var escapable = /[\\\"\x00-\x1f\x7f-\uffff]/g,
	        meta = {    // table of character substitutions
	            '\b': '\\b',
	            '\t': '\\t',
	            '\n': '\\n',
	            '\f': '\\f',
	            '\r': '\\r',
	            '"' : '\\"',
	            '\\': '\\\\'
	        };

 	$scope.result = 0;
 	$scope.rating_color = 'gainsboro'
 	$scope.result_message = ""

	$scope.rate = function(lyrics) {
		// console.log(lyrics);
		clicheServiceURL = "http://aviv-goldgeier-flask-apis.herokuapp.com/cliche";

		$http({
		    method: 'POST',
		    url: clicheServiceURL,
		    data: "lyrics="+clean_unicode(lyrics),
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(data) {
			$scope.result = data['rating'];
			$scope.rating_color = $scope.get_color($scope.result)
			$scope.result_message = $scope.get_result_message($scope.result)
			$scope.draw($scope.result)
      		// console.log('yes!');
   		});
	}

	$scope.get_result_message = function() {
		if ($scope.result == 0) {
			return 'Paste lyrics in the box!'
		} else if ($scope.result < 35) {
			return 'Is this even a song?'
		} else if ($scope.result < 50) {
			return 'Very interesting lyrics!'
		} else if ($scope.result < 65) {
			return 'Nice!'
		} else if ($scope.result < 80) {
			return 'Not too bad.'
		} else if ($scope.result < 90) {
			return 'Pretty cliche lyrics!'
		} else {
			return 'These lyrics are super cliche. For shame.'
		}
	}

	$scope.get_color = function() {
		if ($scope.result == 0) {
			return 'gainsboro'
		} else if ($scope.result < 35) {
			return 'dodgerblue'
		} else if ($scope.result < 50) {
			return 'green'
		} else if ($scope.result < 65) {
			return 'lime'
		} else if ($scope.result < 80) {
			return 'gold'
		} else if ($scope.result < 90) {
			return 'tomato'
		} else {
			return 'crimson'
		}
	}

	$scope.draw = function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		var text_x = 115;
		if ($scope.result == 100) {
		  text_x = 87;
		} else if ($scope.result == 0) {
			text_x = 140;
		}
		ctx.strokeStyle=$scope.rating_color;
		ctx.fillStyle = $scope.rating_color;
		ctx.lineWidth = 15;
		ctx.beginPath();
		ctx.arc(150,150,100,-1*Math.PI,(-1+$scope.result/100)*Math.PI);
		ctx.stroke();
		ctx.font = "48pt sans-serif";
		ctx.fillText($scope.result, text_x, 140);
	}

	function clean_unicode(string) {
	// Adapted from http://stackoverflow.com/questions/834316/how-to-convert-large-utf-8-strings-into-ascii
	// If the string contains no control characters, no quote characters, and no
	// backslash characters, then we can safely slap some quotes around it.
	// Otherwise we must also replace the offending characters with safe escape
	// sequences.
	    escapable.lastIndex = 0;
	    return escapable.test(string) ?
	        string.replace(escapable, function (a) {
	            var c = meta[a];
	            return typeof c === 'string' ? c :
	                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	        }):
	        string ;
    }


  });