angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {

        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.hoteles', {
        url: '/hoteles',
        views: {
          'menuContent': {
            templateUrl: 'templates/hoteles.html',
            controller: 'Hoteles'
          }
        }
      }) 
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/hoteles');
  });
