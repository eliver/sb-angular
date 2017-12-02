angular.module('p2p.client_account',['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        var p2pState = {name:'p2p.client_account',url:'/client_account',
            templateUrl: 'p2p/clientAccount/clientAccount.html',
            controller: 'clientAccountCtrl'};
        $stateProvider.state(p2pState);
    }])
    .controller('clientAccountCtrl', ['$scope', '$location', 'RestService',function ($scope, $location, RestService) {
        var ctrl = this;
        RestService.getAccountDetail().then(function (data) {
            ctrl.ClientInfo = data;
        })
    }]);
