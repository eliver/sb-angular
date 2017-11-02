angular.module('p2p.client_account',['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        var p2pState = {name:'p2p.client_account',url:'/client_account',
            templateUrl: 'clientAccount/clientAccount.html',
            controller: 'clientAccountCtrl'};
        $stateProvider.state(p2pState);
    }])
    .controller('clientAccountCtrl', clientAccountCtrl);
p2pCtrl.$inject = ['$scope', '$location', 'RestService'];
function clientAccountCtrl($scope, $location, RestService) {

}