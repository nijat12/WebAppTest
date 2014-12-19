'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  });
  //.config(function (uiGmapGoogleMapApiProvider) {
  //  uiGmapGoogleMapApiProvider.configure({
  //    key: 'AIzaSyCzFdQjJIg-A3Eenmf-ARMLDxTQ51aC8qc',
  //    v: '3.17',
  //    libraries: 'weather,geometry,visualization'
  //  });
  //});
