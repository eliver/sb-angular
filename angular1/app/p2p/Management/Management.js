'use strict';

angular.module('myApp.management', ['ui.router'])

  .config(['$stateProvider', function ($stateProvider) {
    var managementState = {
      name: 'p2p.management',
      url: '/management',
      templateUrl: 'p2p/Management/Management.html',
      controller: 'ManagementCtrl'
    }
    $stateProvider.state(managementState);

  }])
  .controller('ManagementCtrl', ManagementCtrl);

ManagementCtrl.$inject = ['$scope', 'RestService'];

function ManagementCtrl($scope, RestService) {

  $scope.phone = '';
  $scope.name = '';
  $scope.amount = '';
  $scope.rate = '';
  $scope.startDate = '';
  $scope.endDate = '';


  $scope.addInvests = function () {
    var invest = {};
    invest.phone = $scope.phone;
    invest.name = $scope.name;
    invest.amount = $scope.amount;
    invest.rate = $scope.rate;
    //invest.startDate = $scope.startDate;
    //invest.endDate = $scope.endDate;

    var invests = [];
    invests.push(invest);
    RestService.addInvests(invests);
  }

}