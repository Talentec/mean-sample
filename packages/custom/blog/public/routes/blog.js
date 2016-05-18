'use strict';

angular.module('mean.blog').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('blog example page', {
      url: '/blog/example',
      templateUrl: 'blog/views/index.html'
    });
  }
]);
