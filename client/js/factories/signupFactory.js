angular.module('userFactory', [])
.factory('SignUpFactory', function($http) {
  var userSignIn = function(userData) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: { userData: userData }
      //using object so that data is organized and 
      //we don't have to access every value we want on the server side
    
});
