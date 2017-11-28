(function() {
    function RoomCtrl($cookies, Room, Message, $uibModal) {
        var $ctrl = this;
        $ctrl.rooms = Room.all;
        $ctrl.messages = null;
        $ctrl.currentRoom = null;

        $ctrl.getRoom = function (room) {
            $ctrl.messages = Message.getByRoomId(room.$id);
            $ctrl.currentRoom = room;
        };

        $ctrl.newMsg = function (newMessage) {
            var currentUser = $cookies.get('blocChatCurrentUser');

            if (newMessage != '') {
                var message = {
                    content: newMessage,
                    roomId: $ctrl.currentRoom.$id,
                    sentAt: firebase.database.ServerValue.TIMESTAMP,
                    username: currentUser
                };
                Message.send(message);
                $ctrl.$setPristine();
            }
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
        .controller('RoomCtrl', ['$cookies', 'Room', 'Message', '$uibModal', RoomCtrl]);
})();
