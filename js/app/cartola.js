'use strict';

var cartolaApp = angular.module('cartolaApp', []);

cartolaApp.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

cartolaApp.factory('Cartola', ['$http', function($http) {
  var baseUrl = 'https://api.cartolafc.globo.com/';
  return {
    status: function () {
      var promise = $http.get(baseUrl + 'mercado/status').then(
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
