'use strict';

angular.module('myApp')
  .factory('RestService', RestService);

RestService.$inject = ['$http', '$q'];

function RestService($http, $q) {

  var url = 'http://localhost:8080/';


  function invokeAction(method, data, config) {

    var deferred = $q.defer();
    $http.post(url + method, JSON.stringify(data), config)
      .then(function (response) {
        if (response.status === 200) {
          if (method === 'login') {
            deferred.resolve(response.headers);
          } else {
            deferred.resolve(response.data);
          }
        } else {
          deferred.reject(response.statusText);
        }
      });

    return deferred.promise;
  }


  var svc = {};

  svc.login = function (username, password) {
    var user = {};
    user.username = username;
    user.password = password;

    return invokeAction('login', user)
  };

  svc.getLoginUser = function () {
    return invokeAction('getLoginUser');
  };

  svc.addUser = function (user) {
    return invokeAction('addUser', user);
  };

  svc.deleteUser = function (user) {
    return invokeAction('deleteUser', user);
  };

  svc.getAllUsers = function () {
    return invokeAction('getAllUsers');
  };

  svc.upsertUsers = function (users) {
    return invokeAction('upsertUsers', users);
  };

  svc.getClientAccount = function () {
    return invokeAction('getClientAccount');
  };

  svc.getInvestList = function () {
    return invokeAction('getInvestList');
  };

  svc.addInvests = function (invests) {
    return invokeAction('addInvests', invests[0]);
  };

  svc.getPaybackDetail = function () {
    return invokeAction('getPaybackDetail');
  };

  return svc;

}