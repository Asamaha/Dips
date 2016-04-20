//parent module
// inject children modules for access
angular.module('roomsurf', ['ngAnimate', 'ui.bootstrap','ui.router','eventsInfo', 'eventsInfoFactory', 'userInfo', 'userFactory', 'loginInfo', 'userloginFactory'])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('signup');
    $httpProvider.interceptors.push('AttachToken');
    //runs before reaching server and 
    //pushes the result of what we have defined with factory function
    
    $stateProvider 
      .state('signupPage', {
        url : '/signup', 
        views: {
          'indexPage' : {
            templateUrl : 'views/signup.html',
            controller : 'userSignUp'
          }         
        },
        data : { authenticate: false }
      })
      .state('dashboardPage', {
        url : '/dashboard',
        views: {
          'indexPage' : {
            templateUrl : 'views/dashboard.html',
            controller : 'eventsController'
          }
        },
        data : { authenticate: true }
      })
      .state('dashboardPage.events', {
        url : '/events',
        templateUrl : 'views/eventListEmbedded.html',
        controller : 'eventsController',
        data : { authenticate: true }
      })
      .state('loginupPage', {
        url : '/login', 
        views: {
          'indexPage' : {
            templateUrl : 'views/login.html',
            controller : 'userLogin'
          }         
        },
        data : { authenticate: false }
      })
    })
  