'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', function ($stateProvider) {
    var p2pState = {name:'view1',url:'/view1',
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'}
    $stateProvider.state(p2pState);
}])

.controller('View1Ctrl', [function() {

}]);