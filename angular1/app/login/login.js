'use strict';

angular.module('myApp.login', ['ui.router'])

  .config(['$stateProvider', function ($stateProvider) {
      var loginState = {name:'login',url:'/login',
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'}
      $stateProvider.state(loginState);

  }])
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$location', 'RestService'];

function LoginCtrl($scope, $location, RestService) {

  $scope.username = '';
  $scope.password = '';

  $scope.login = function () {
    RestService.login($scope.username, $scope.password)
      .then(function (data) {
        var token = data('Authorization');
        if (token) {
          $location.path("/view2");
        }
      });
  }

  $scope.enterEvent = function (e) {
    var keycode = window.event ? e.keyCode : e.which;
    if (keycode == 13) {
      $scope.login();
    }
  }

}