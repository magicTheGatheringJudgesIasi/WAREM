(function(){
	'use strict';
	
	angular
	.module('magicTheGathering')
	.directive('event', [function () {
		return {
			restrict: 'A',
			templateUrl: 'app/components/event/event.html'
		};
	}])
})();