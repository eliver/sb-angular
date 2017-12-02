'use strict';

angular.module('myApp.investmentRecord', ['ui.router'])
  .config(['$stateProvider', function ($stateProvider) {
    var p2pState = {
      name: 'p2p.invest',
      url: '/investment_record',
      templateUrl: 'p2p/InvestmentRecord/InvestmentRecord.html',
      controller: 'InvestmentRecordCtrl'
    };
    $stateProvider.state(p2pState);
  }])
  .controller('InvestmentRecordCtrl', InvestmentRecordCtrl);

InvestmentRecordCtrl.$inject = ['$scope', 'RestService'];

function InvestmentRecordCtrl($scope, RestService) {
  $scope.investList = [];
  RestService.getInvestRecord()
    .then(function (data) {
        $scope.investList = data;
      }
    );
}