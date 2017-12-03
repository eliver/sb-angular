angular.module('p2p.payback_detail', ['ui.router'])
  .config(['$stateProvider', function ($stateProvider) {
    var p2pState = {
      name: 'p2p.payback_detail',
      url: '/payback_detail',
      templateUrl: 'p2p/payback_detail/payback_detail.html',
      controller: 'payback_detail'
    };
    $stateProvider.state(p2pState);
  }])
  .controller('payback_detail', payback_detail);

p2pCtrl.$inject = ['$scope', '$location', 'RestService'];

function payback_detail($scope, $location, RestService) {
  $scope.paybackList = [];

  RestService.getPaybackDetail()
    .then(function (data) {
      $scope.paybackList = data;
    });
}