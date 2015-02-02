'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */

angular.module('testApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('testApp')
  .directive('myMaps', function() {
    return {
      restrict: 'E',
      template:'<div></div>',
      replace:true,
      link:function(scope, element, attrs){
        var myLatLng = new google.maps.LatLng(25.773,-80.193);
        var mapOptions = {
          center: myLatLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title:'My town'
        });
        marker.setMap(map);
      }
    };
  });
