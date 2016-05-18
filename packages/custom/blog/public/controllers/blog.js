'use strict';

/* jshint -W098 */
angular.module('mean.blog').controller('BlogController', ['$scope', 'Global', 'Blog',
  function($scope, Global, Blog) {
    $scope.global = Global;
    $scope.package = {
      name: 'blog'
    };
  }
]);
