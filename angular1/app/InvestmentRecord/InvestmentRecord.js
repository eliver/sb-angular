'use strict';

angular.module('myApp.investmentRecord', ['ui.router'])
  .config(['$stateProvider', function ($stateProvider) {
    var p2pState = {
      name: 'p2p.invest', url: '/investment_record',
      templateUrl: 'InvestmentRecord/InvestmentRecord.html',
      controller: 'InvestmentRecordCtrl'
    };
    $stateProvider.state(p2pState);
  }]);

InvestmentRecordCtrl.$inject = ['$scope', '$location', 'RestService', 'NgTableParams'];

function InvestmentRecordCtrl($scope, $location, RestService, NgTableParams) {
  var ctrl = this;
  RestService.getInvestRecord().then(function (data) {
    ctrl.dataList = data;
    ctrl.tableParams = new NgTableParams({count: 5}, {counts: [5, 10, 25], dataset: data});
  });
}