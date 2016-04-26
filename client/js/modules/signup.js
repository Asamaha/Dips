angular.module('userInfo', [])
  .controller('userSignUp', function($scope, $window, $state, SignUpFactory) {
    $scope.user = {};
    $scope.user.username = '';
    $scope.user.email = '';
    $scope.user.password = '';

    $scope.signUp = function() {
      if($scope.user.username === '') {
        ("Must Enter User Name");
      } else if($scope.user.email === '') {
        ("Must Enter Valid Email");
      } else if($scope.user.password === '') {
        ("Must Enter Password");
      } else {
        $state.go('dashboardPage'); 
        SignUpFactory.signUpData($scope.user)
          .then(function(token) {
            $window.localStorage
            .setItem('dibsToken', token.data);
          });
      }
    },

    $scope.loginPage = function() {
      $state.go('loginupPage');      
    };
});