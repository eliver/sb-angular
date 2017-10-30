angular.module('myApp.p2p',['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'p2p/p2p.html',
            controller: 'p2pCtrl'
        });
}])
    .controller('p2pCtrl', p2pCtrl);
p2pCtrl.$inject = ['$scope', '$location', 'RestService'];
function p2pCtrl($scope, $location, RestService) {

}