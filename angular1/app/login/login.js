'use strict';

angular.module('myApp.login', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    });
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