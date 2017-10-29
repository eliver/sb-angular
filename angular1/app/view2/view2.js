'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])
    .controller('View2Ctrl', View2Ctrl);

View2Ctrl.$inject = ['$scope', 'RestService'];

function View2Ctrl($scope, RestService) {

    $scope.users = [];

  RestService.getUsers().then(function (data) {
        $scope.users = data;
    });

}
