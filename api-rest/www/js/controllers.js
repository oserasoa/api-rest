angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    // Perform the login action when the user submits the login form
  })

  .controller('Hoteles', function ($scope, $http) {

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

    $scope.enviar = function(valNombre){
      nombreHotel = valNombre;
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:3001/hoteles',
        params: { stars: estrellas , nameHotel: nombreHotel}
      }).success(function (data, status, headers, config) {
        $scope.hoteles = data;
        //console.log($scope.hoteles);
      }).error(function (data, status, headers, config) {
        console.log("Ha fallado la petición. Estado HTTP:" + status);
      });
    };

    $scope.changeStatus = function (valEstrellas) {
      estrellas = valEstrellas;
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:3001/hoteles',
        params: { stars: estrellas , nameHotel: nombreHotel}
      }).success(function (data, status, headers, config) {
        $scope.hoteles = data;
        //console.log($scope.hoteles);
      }).error(function (data, status, headers, config) {
        console.log("Ha fallado la petición. Estado HTTP:" + status);
      });
    };
    $scope.changeStatus(0);
  })
