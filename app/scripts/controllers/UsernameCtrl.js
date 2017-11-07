(function() {
    function UsernameCtrl($cookies, $uibModalInstance) {
        var $ctrl = this;

        $ctrl.addButton = function () {
            if ($ctrl.form.userForm.$valid) {
                $cookies.put('blocChatCurrentUser', $ctrl.username);
                $uibModalInstance.close();
            }
        };
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$cookies', '$uibModalInstance', UsernameCtrl]);
})();
