angular.module('myApp.investmentRecord',['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        var p2pState = {name:'p2p.invest',url:'/investment_record',
            templateUrl: 'InvestmentRecord/InvestmentRecord.html',
            controller: 'InvestmentRecordCtrl'};
        $stateProvider.state(p2pState);
    }])
    .controller('InvestmentRecordCtrl', InvestmentRecordCtrl);
p2pCtrl.$inject = ['$scope', '$location', 'RestService'];
function InvestmentRecordCtrl($scope, $location, RestService) {

}