(function() {
    'use strict';

    angular
        .module('magicTheGathering')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(PLAYERS_TXT, JsonParser) {
        var vm = this;

        vm.players = JsonParser.getParsedPlayersTxtArray(PLAYERS_TXT);
    }
})();