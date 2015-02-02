'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */

angular.module('testApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


angular.module('testApp')
  .factory('Avengers', function() {
    var Avengers = {};
    Avengers.cast = [
      {
        name: 'Samuel L. Jackson',
        character: 'Nick Fury'
      },
      {
        name: 'Gwyneth Paltrow',
        character: 'Pepper Pots'
      },
      {
        name: 'Robert Downey Jr.',
        character: 'Tony Stark'
      },
      {
        name: 'Chris Evans',
        character: 'Captain America'
      },
    ];

    return Avengers;
  });

angular.module('testApp')
  .controller('AvengersCtrl', function ($scope, Avengers) {
    $scope.avengers = Avengers;
  });


angular.module('testApp')
  .directive('onhover', function() {
    return function (scope, element, attrs) {
      element.bind('mouseenter', function () {
        element.addClass(attrs.onhover);
      });
    };
  });

angular.module('testApp')
   .directive('leave', function() {
      return function (scope, element, attrs) {
        element.bind('mouseleave', function () {
          element.removeClass(attrs.onhover);
        });
      };
  });

angular.module('testApp')
  .controller('AppCtrl', function ($scope) {
    $scope.loadMoreTweets = function () {
      alert('Loading tweets!');
    };
    $scope.deleteTweets = function () {
      alert('Deleting tweets!');
    };
  });

angular.module('testApp')
  .directive('enter', function() {
    return function (scope, element, attrs) {
      element.bind('mouseenter', function () {
        scope.$apply(attrs.enter);
      });
    };
  });



angular.module('testApp')
  .directive('superhero', function() {
    return {
      restrict: 'E',
      scope:{},
      controller: function ($scope) {
        $scope.abilities = [];

        this.addStrength = function () {
          $scope.abilities.push('strength');
        },
        this.addSpeed = function () {
          $scope.abilities.push('speed');
        },
        this.addFlight = function () {
          $scope.abilities.push('flight');
        };
      },
      link: function (scope, element) {
        element.addClass('button');

        element.bind('mouseenter', function () {
            console.log(scope.abilities);
        });
      }
    };
  });

angular.module('testApp')
  .directive('strength', function() {
      return {
        require:'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
          superheroCtrl.addStrength();
        }
      };
  });

angular.module('testApp')
  .directive('speed', function() {
    return {
      require:'superhero',
      link: function(scope, element, attrs, superheroCtrl) {
        superheroCtrl.addSpeed();
      }
    };
  });

angular.module('testApp')
  .directive('flight', function() {
    return {
      require:'superhero',
      link: function(scope, element, attrs, superheroCtrl) {
        superheroCtrl.addFlight();
      }
    };
  });

angular.module('testApp')
  .directive('clock')
