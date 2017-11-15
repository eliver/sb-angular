angular.module('myApp.investmentRecord',['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        var p2pState = {name:'p2p.invest',url:'/investment_record',
            templateUrl: 'InvestmentRecord/InvestmentRecord.html',
            controller: 'InvestmentRecordCtrl'};
        $stateProvider.state(p2pState);
    }])
    .controller('InvestmentRecordCtrl', ['$scope', '$location', 'RestService',function ($scope, $location, RestService) {
        var ctrl = this;
        RestService.getInvestRecord().then(function (data) {
            ctrl.dataList = data;
        })
    }]);
