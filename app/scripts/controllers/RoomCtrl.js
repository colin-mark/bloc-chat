(function() {
    function RoomCtrl(Room, Message, $uibModal) {
        var $ctrl = this;
        $ctrl.rooms = Room.all;
        $ctrl.messages = [];

        $ctrl.getRoom = function (roomId) {
            $ctrl.messages = Message.getByRoomId(roomId);;
            console.log(roomId, $ctrl.messages)
        };

        $ctrl.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/addroom.html',
                controller: 'AddRoomCtrl',
                controllerAs: '$ctrl'
            });

            modalInstance.result.then(function (roomName) {
                Room.add(roomName);
            });
        };
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$uibModal', RoomCtrl]);
})();
