angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

  })

  .controller('Hoteles', function ($scope, $http, endPointRest) {

    $scope.endPointRest = endPointRest.url();

    nombreHotel = "";
    $scope.nombreHotel = "";
    estrellas = '0';

    $scope.stars = function (num) {
      var arr = [];
      for (i = 0; i < num; i++) {
        arr.push(i);
      }
      return arr;
    };

    var http = function(){
      $http({
        method: 'GET',
        url: $scope.endPointRest + '/hoteles',
        params: { stars: estrellas, nameHotel: nombreHotel }
      }).success(function (data, status, headers, config) {
        $scope.hoteles = data;
        //console.log($scope.hoteles);
      }).error(function (data, status, headers, config) {
        console.log("Ha fallado la petición. Estado HTTP:" + status);
      });
    }

    $scope.btnEnviar = function (valNombre) {
      nombreHotel = valNombre;
      http();
    };

    $scope.changeStatus = function (valEstrellas) {
      estrellas = valEstrellas;
      http();
    };

    http();
  })
