(function() {
    function AddRoomCtrl(Room, $uibModalInstance) {
        var $ctrl = this;

        $ctrl.addButton = function () {
            $uibModalInstance.close($ctrl.newroom);
        };

        $ctrl.cancelButton = function () {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('AddRoomCtrl', ['Room', '$uibModalInstance', AddRoomCtrl]);
})();
