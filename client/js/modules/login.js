angular.module('loginInfo', [])
  .controller('userLogin', function($scope, $window, $state, LoginFactory) {
    $scope.loginUser = {};
    $scope.loginUser.username = '';
    $scope.loginUser.password = '';

    $scope.login = function() {
      if($scope.loginUser.username === '') {
        $scope.loginUser.username = '';
      } else if($scope.loginUser.password === '') {
         $scope.loginUser.password = '';
      } else {
        LoginFactory.userLoginIn($scope.loginUser)
          .then(function(finalResult) {
            if(finalResult.data.result){
              $state.go('dashboardPage'); 
            } else {
              alert("Incorrect Username or Password");              
            }
          });
      }
    };
});
