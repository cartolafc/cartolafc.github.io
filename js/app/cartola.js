'use strict';

var cartolaApp = angular.module('cartolaApp', []);

cartolaApp.factory('Cartola', ['$http', function($http) {
  var baseUrl = 'https://api.cartolafc.globo.com/';
  return {
    status: function () {
      var promise = $http.jsonp(baseUrl + 'mercado/status?callback=JSON_CALLBACK').then(
          function(response) {
            return response.data;
          },
          function(response) {
            // error processing request
            return response;
          }
      );

      return promise;
    }
  }
}]);

cartolaApp.controller('StatusCtrl', ['Cartola', '$scope', function(Cartola, $scope) {
  $scope.status = Cartola.status();
}]);
