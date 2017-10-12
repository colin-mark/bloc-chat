(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('room', {
                url: '/',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/room.html'
            });
    }

    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();
