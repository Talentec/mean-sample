'use strict';

angular.module('mean.blog').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('blog index', {
        url: '/blog',
        templateUrl: 'blog/views/index.html'
      })
      .state('blog new', {
        url: '/blog/new',
        templateUrl: 'blog/views/new.html',
        controller: function ($scope) {
          $scope.title = "New Post";
        }
      })
      .state('blog show', {
        url: '/blog/detail/:id',
        templateUrl: 'blog/views/show.html'
      });
  }
]);
