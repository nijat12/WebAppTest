'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */

angular.module('testApp')
  .factory('Data', function () {
    return {message: 'Im data from a service'};
  });

angular.module('testApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('testApp')
  .controller('InCtrl', function ($scope) {
    $scope.data = Data;
  });


angular.module('testApp')
  .controller('FirstCtrl', function ($scope, Data) {
    $scope.data = Data;
  });

angular.module('testApp')
  .controller('SecondCtrl', function ($scope, Data) {
    $scope.data = Data;

    $scope.reversedMessage = function(message) {
      return message.split('').reverse().join('');
    };
  });
