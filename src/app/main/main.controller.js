(function() {
    'use strict';

    angular
        .module('magicTheGathering')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(PLAYERS_TXT, JsonParser, $rootScope) {
        var vm = this;

        vm.players = JsonParser.getParsedPlayersTxtArray(PLAYERS_TXT);

        vm.addPlayer = function(player) {
            $rootScope.$broadcast('addedPlayer', player);
        }
    }
})();