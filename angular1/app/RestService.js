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

  svc.getLoginUser = function () {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/getLoginUser', {}, {})
      .then(function (response) {
        if (response.status === 200) {
          deferred.resolve(response.data);
        } else {
          deferred.reject(response.statusText);
        }
      });

    return deferred.promise;
  }

  svc.addUser = function (user) {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/addUser', JSON.stringify(user), {})
      .then(function (response) {
        if (response.status === 200) {
          deferred.resolve(response.data);
        } else {
          deferred.reject(response.statusText);
        }
      });

    return deferred.promise;
  };

  svc.deleteUser = function (user) {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/deleteUser', JSON.stringify(user), {})
      .then(function (response) {
        if (response.status === 200) {
          deferred.resolve(response.data);
        } else {
          deferred.reject(response.statusText);
        }
      });

    return deferred.promise;
  }

  svc.getAllUsers = function () {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/allUsers', {}, {})
      .then(function (response) {
        if (response.status === 200) {
          deferred.resolve(response.data);
        } else {
          deferred.reject(response.statusText);
        }
      });

    return deferred.promise;
  }

  svc.upsertUsers = function (users) {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/upsertUsers', JSON.stringify(users), {})
      .then(function (response) {
        if (response.status === 200) {
          deferred.resolve(response.data);
        } else {
          deferred.reject(response.statusText);
        }
      });

    return deferred.promise;
  }

  svc.getClientAccount = function () {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/clientAccount')
      .then(function (response) {
        if (response.status === 200) {
          deferred.resolve(response.data);
        } else {
          deferred.reject(response.statusText);
        }
      });

    return deferred.promise;
  };

  svc.getInvestRecord = function () {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/investList')
      .then(function (response) {
        if (response.status === 200) {
          deferred.resolve(response.data);
        } else {
          deferred.reject(response.statusText);
        }
      });

    return deferred.promise;
  };

  svc.addInvests = function (invests) {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/addInvests', JSON.stringify(invests[0]), {})
      .then(function (response) {
        if (response.status === 200) {
          deferred.resolve(response.data);
        } else {
          deferred.reject(response.statusText);
        }
      });

    return deferred.promise;
  }

  svc.getPaybackDetail = function () {
    var deferred = $q.defer();
    $http.post('http://localhost:8080/paybackDetail', {}, {})
      .then(function (response) {
        if (response.status === 200) {
          deferred.resolve(response.data);
        } else {
          deferred.reject(response.statusText);
        }
      });

    return deferred.promise;
  }

  return svc;

}