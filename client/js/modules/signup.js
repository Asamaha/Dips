angular.module('userInfo', [])
  .controller('userSignUp', function($scope, $window, $state, SignUpFactory) {
    $scope.user = {};
    $scope.user.username = '';
    $scope.user.email = '';
    $scope.user.password = '';

    $scope.signUp = function() {
      if($scope.user.username === '') {
        aler("Must Enter User Name");
      } else if($scope.user.email === '') {
        aler("Must Enter Valid Email");
      } else if($scope.user.password === '') {
        aler("Must Enter Password");
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