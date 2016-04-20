angular.module('eventsInfoFactory', [])
.factory('Eventstored', function($http) {
  //posts events to database
  var eventData = function(dibEvent) {
    return $http({
      method: 'POST',
      url: '/api/events/booked',
      data: { dibEvent : dibEvent }
    }).then(function(responseObj){
      return responseObj;
    });
  };
  //retrieves events
  var getData = function() {
    return $http({
      method: 'GET',
      url: '/api/events/events'
    });
  };

});