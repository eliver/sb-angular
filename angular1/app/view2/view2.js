'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])
    .controller('View2Ctrl', View2Ctrl)
    .factory('View2Service', View2Service);

View2Ctrl.$inject = ['$scope', 'View2Service'];

function View2Ctrl($scope, View2Service) {

    $scope.users = [];

    View2Service.getUsers().then(function (data) {
        $scope.users = data;
    });

}

View2Service.$inject = ['$http', '$q'];

function View2Service($http, $q) {

    var svc = {};
    svc.getUsers = function() {
        var deferred = $q.defer();
        $http.post('http://localhost:8080/users', '', {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290IiwiZXhwIjoxNTA5NDU5NTc1fQ.mia2tFCnrSm9xyMZMHHhC3QaIvcWW5ztYoD7HGiQL05KfwfbhGz_VZ3AdHH5yg93HhP-7twvN71kPmqDPc9jUQ',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin' : '*'
            }
        }).then(function (value) {
            if (value.status == 200) {
                deferred.resolve(value.data);
            } else {
                deferred.reject(value.statusText);
            }
        });

        return deferred.promise;
    };

    return svc;
}