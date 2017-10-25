(function() {
    function RoomCtrl(Room, $uibModal) {
        var $ctrl = this;
        $ctrl.rooms = Room.all;
        $ctrl.open = function () {
          var modalInstance = $uibModal.open({
            templateUrl: '/templates/addroom.html',
            controller: 'AddRoomCtrl',
            controllerAs: '$ctrl'
          });

          modalInstance.result.then(function (roomName) {
            Room.add(roomName);
          }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
          });
        };
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();
