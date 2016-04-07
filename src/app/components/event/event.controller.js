(function() {
    'use strict';

    angular
        .module('magicTheGathering')
        .controller('EventController', ['$rootScope',
            function($rootScope) {
                var vm = this;
                vm.enlistedPlayers = [];
                vm.sittings = [];
                vm.rounds = [];

                $rootScope.$on('addedPlayer', function(event, player) {
                    if (vm.enlistedPlayers.indexOf(player) == -1) {
                        vm.enlistedPlayers.push(player);
                    }
                })

                vm.removePlayerByIndex = function(index) {
                    vm.enlistedPlayers.splice(index, 1);
                }

                vm.startEvent = function() {
                	setInitialPrerequisites(vm.enlistedPlayers);

                    vm.isEventRunning = true;
                    vm.currentRound = 1;

                    vm.enlistedPlayers = shuffleArray(vm.enlistedPlayers);

                    for (var index = 0; index < vm.enlistedPlayers.length/2*2; index+=2) {
                    	var pair = {};

                    	pair.firstPlayer = vm.enlistedPlayers[index];
                    	pair.secondPlayer = vm.enlistedPlayers[index+1];

                    	vm.sittings.push(pair);
                    }

                    if(vm.enlistedPlayers.length % 2 == 1) {
                    	var lastPlayer = vm.enlistedPlayers[vm.enlistedPlayers.length - 1];
                    	lastPlayer.hadBye = true;
                    	vm.byePlayer = lastPlayer;
                    }
                }

                vm.createNextRound = function() {

                }

                function shuffleArray(array) {
                    for (var i = array.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                    return array;
                }

                function setInitialPrerequisites(array) {
                	for (var index = 0; index < array.lenght; index++) {
                		array[index].score = 0;
                		array[index].hadBye = false;
                		array[index].opponents = [];
                	}
                }
            }
        ])
})();