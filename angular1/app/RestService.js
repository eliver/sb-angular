'use strict';

angular.module('myApp')
  .factory('RestService', RestService);

RestService.$inject = ['$http', '$q'];

function RestService($http, $q) {

  var svc = {};

  svc.login = function (username, password) {
    var deferred = $q.defer();
    var data = {};
    data.username = username;
    data.password = password;
    var config = {};
    $http.post('http://localhost:8080/login', JSON.stringify(data), config)
      .then(function (value) {
        if (value.status === 200) {
          deferred.resolve(value.headers);
        } else {
          deferred.reject(value.statusText);
        }
      });

    return deferred.promise;
  };

  svc.getUsers = function () {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/users')
      .then(function (value) {
        if (value.status === 200) {
          deferred.resolve(value.data);
        } else {
          deferred.reject(value.statusText);
        }
      });

    return deferred.promise;
  };
  svc.getAccountDetail = function () {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/details')
      .then(function (value) {
        if (value.status === 200) {
          deferred.resolve(value.data);
        } else {
          deferred.reject(value.statusText);
        }
      });

    return deferred.promise;
  };
  svc.getInvestRecord = function () {
    var deferred = $q.defer();
    $http.get('mockData/Invest_Record.json').then(function (response) {
      deferred.resolve(response.data);
    }, function () {
      deferred.reject(value.statusText);
    });
    return deferred.promise;
  };

  svc.addInvests = function (invests) {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/addInvests', JSON.stringify(invests[0]), {})
      .then(function (value) {
        if (value.status === 200) {
          deferred.resolve(value);
        } else {
          deferred.reject(value);
        }
      });

    return deferred.promise;
  }

  return svc;

}