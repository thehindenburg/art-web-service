angular.module('art', [])
	.controller('theArt', ['$http', '$scope', function($http, $scope){
		$scope.byArtist = function() {
			$http.get('data/artist-data.js').success(function(data) {
				$scope.paintings = [];
				$scope.loc = [];
				$scope.movement = [];
				$scope.paintings = data["art works"];
				var theLoc = [],
				theMov = [];
				for(var a = 0; a < $scope.paintings.length; a++) {
				theLoc.push($scope.paintings[a]["Country"]);
				theMov.push($scope.paintings[a]["Movement"]);
				}
				$scope.loc = uniq(theLoc);
				$scope.movement = uniq(theMov);
				$scope.loc.sort();
				$scope.movement.sort();
			})
		}
		$scope.byTitle = function() {
			$http.get('data/title-data.js').success(function(data) {
				$scope.paintings = [];
				$scope.loc = [];
				$scope.movement = [];
				$scope.paintings = data["art works"];
				var theLoc = [],
				theMov = [];
				for(var a = 0; a < $scope.paintings.length; a++) {
					theLoc.push($scope.paintings[a]["Country"]);
					theMov.push($scope.paintings[a]["Movement"]);
				}
				$scope.loc = uniq(theLoc);
				$scope.movement = uniq(theMov);
				console.log($scope.paintings);
				console.log($scope.movement);
				console.log($scope.loc);
			})
		};
		function uniq(a) {
    		var seen = {};
    		return a.filter(function(item) {
    			if(item) {
        			return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        		}
    		});
		}
	}]);