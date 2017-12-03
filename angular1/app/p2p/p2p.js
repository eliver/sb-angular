angular.module('myApp.p2p', [
  'ui.router',
  'p2p.client_account',
  'p2p.investmentRecord',
  'p2p.payback_trend',
  'p2p.payback_detail',
  'p2p.management',
  'p2p.user'
])
  .config(['$stateProvider', function ($stateProvider) {
    var p2pState = {
      name: 'p2p', url: '/p2p',
      templateUrl: 'p2p/p2p.html',
      controller: 'p2pCtrl'
    };
    $stateProvider.state(p2pState);
  }])
  .controller('p2pCtrl', p2pCtrl);
p2pCtrl.$inject = ['$scope', '$location', 'RestService'];

function p2pCtrl($scope, $location, RestService) {

}