'use strict';

angular.module('myApp.view2', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        var p2pState = {name:'view2',url:'/view2',
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'}
        $stateProvider.state(p2pState);
    }])
    .controller('View2Ctrl', View2Ctrl);

View2Ctrl.$inject = ['$scope', 'RestService'];

function View2Ctrl($scope, RestService) {

    $scope.users = [];

  RestService.getUsers().then(function (data) {
        $scope.users = data;
    });

}
