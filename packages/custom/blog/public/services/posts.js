'use strict';

angular.module('mean.blog').service('Posts', ['$http', function ($http) {
  this.get = function () {
    return $http({
      method: 'GET',
      url: '/api/posts'
    });
  };

  this.save = function (data) {
    return $http({
      method: 'POST',
      url: '/api/posts',
      data: data
    });
  };

  this.getDetail = function (data) {
    return $http({
      method: 'GET',
      url: '/api/posts/' + data.id
    });
  };

  this.update = function (data) {
    return $http({
      method: 'PUT',
      url: '/api/posts/' + data.id,
      data: data.comment
    });
  };
}]);