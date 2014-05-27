'use strict';

angular.module('reservedWordsCheckerApp')
  .controller('MainCtrl', function ($scope, words) {
    $scope.data = {
      sections:   Object.keys(words),
      word:       null,
      isReserved: false
    };
    $scope.data.section = $scope.data.sections[0];

    $scope.check = function () {
      $scope.data.isReserved = null;
      if (!$scope.data.word) {
        return false;
      }
      $scope.data.isReserved = !(words[$scope.data.section].indexOf($scope.data.word) < 0);
    };
  });
