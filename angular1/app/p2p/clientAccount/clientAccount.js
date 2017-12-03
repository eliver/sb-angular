angular.module('p2p.client_account',['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        var p2pState = {name:'p2p.client_account',url:'/client_account',
            templateUrl: 'p2p/clientAccount/clientAccount.html',
            controller: 'clientAccountCtrl'};
        $stateProvider.state(p2pState);
    }])
    .controller('clientAccountCtrl', clientAccountCtrl);

clientAccountCtrl.$inject = ['$scope', '$location', 'RestService'];

function clientAccountCtrl($scope, $location, RestService) {
  $scope.clientAccount = {};

  RestService.getClientAccount()
    .then(function (data) {
      $scope.clientAccount = data;
    });
}

