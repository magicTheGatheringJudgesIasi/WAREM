(function() {
    'use strict';

    angular
        .module('magicTheGathering')
        .factory('JsonParser', [
            function() {
            	var service = {
            		getParsedPlayersTxtArray: getParsedPlayersTxtArray
            	};

                return service;
            
                function getParsedPlayersTxtArray(givenTxtArray) {
                	var players = [];

                	for (var playerJson in givenTxtArray) {
                		var player = givenTxtArray[playerJson];
                		
                		var parsedPlayer = {};
                		parsedPlayer.name = '';

                		var words = player.split(' ');

                		parsedPlayer.dci = words[0];
                		parsedPlayer.nationality = words[words.length - 1];

                		for (var index = 1; index < words.length - 1; index++) {
                			parsedPlayer.name += (words[index] + ' ');
                		}

                		parsedPlayer.name.trim();

                		players.push(parsedPlayer);
                	}

                	return players;
                }
            }
        ])
})();		