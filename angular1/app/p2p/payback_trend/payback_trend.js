angular.module('p2p.payback_trend', ['ui.router'])
  .config(['$stateProvider', function ($stateProvider) {
    var p2pState = {
      name: 'p2p.payback_trend',
      url: '/payback_trend',
      templateUrl: 'p2p/payback_trend/payback_trend.html',
      controller: 'payback_trendCtrl'
    };
    $stateProvider.state(p2pState);
  }])
  .controller('payback_trendCtrl', payback_trendCtrl);
p2pCtrl.$inject = ['$scope', '$location', 'RestService'];

function payback_trendCtrl($scope, $location, RestService) {

}