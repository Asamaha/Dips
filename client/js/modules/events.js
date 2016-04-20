angular.module('eventsInfo', [])
  .constant('moment', moment)
  .controller('eventsController', function($scope, $state, Eventstored, moment, $interval) {
    $scope.eve = {};
    $scope.eve.eventDate = '';
    $scope.eve.eventDescription = '';
    $scope.eve.eventAlert = '';
    $scope.eve.eventTime = '';
    $scope.eve.roomName = '';
    $scope.eve.houseName = 'Hacker House';

    $scope.refreshEvents = function() {
      $interval(function(){
        Eventstored.getData().then(function(events) {

          var allEvents = events.data;
          var today = moment().dayOfYear();

          for (var i = 0; i < allEvents.length; i++) {
            var eachDib = moment(allEvents[i].eventDate).dayOfYear();
            var diff = eachDib - today;
            allEvents[i].diff = diff;
          }
          var formattedEvents = Eventstored.formatData(events);
          $scope.bookedEvents = formattedEvents;
        });
      }, 500);
    };
});