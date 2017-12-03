'use strict';

angular.module('p2p.user', ['ui.router'])

  .config(['$stateProvider', function ($stateProvider) {
    var userState = {
      name: 'p2p.user',
      url: '/user',
      templateUrl: 'p2p/User/User.html',
      controller: 'UserCtrl'
    }
    $stateProvider.state(userState);
  }])
  .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$scope', 'RestService'];

function UserCtrl($scope, RestService) {
  $scope.users = [];
  $scope.newUser = {};

  RestService.getAllUsers()
    .then(function (data) {
      $scope.users = data;
    });


  $scope.addUser = function () {
    $scope.add = true;

  };

  $scope.save = function () {

    if ($scope.add) {
      $scope.newUser.enabled = true;
      $scope.users.push($scope.newUser);
    }
    RestService.upsertUsers($scope.users)
      .then(function (data) {
        $scope.users = data;
        $scope.newUser = [];
        $scope.add = false;
      });

  };

}