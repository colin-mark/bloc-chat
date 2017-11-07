(function() {
    function BlocChatCookies($cookies, $uibModal, Room) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/username.html',
                controller: 'UsernameCtrl',
                controllerAs: '$ctrl',
                backdrop: 'static',
                keyboard: false
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', 'Room', BlocChatCookies]);
})();
