'use strict';

var cartolaApp = angular.module('cartolaApp', []);

cartolaApp.factory('Cartola', ['$http', function($http) {
  var baseUrl = 'https://api.cartolafc.globo.com/';
  return {
    status: function () {
      var promise = $http(baseUrl + 'mercado/status').then(function(response) {
        return response.data;
      });

      return promise;
    }
  }
}]);

cartolaApp.controller('StatusCtrl', ['Cartola', '$scope', function(Cartola, $scope) {
  $scope.status = Cartola.status();
}]);
