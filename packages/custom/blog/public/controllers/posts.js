'use strict';

angular.module('mean.blog').controller('PostsController', ['$scope', '$stateParams', '$state', 'Global', 'Posts',
  function($scope, $stateParams, $state, Global, Posts) {
    $scope.global = Global;

    $scope.find = function() {
      Posts.get()
        .success(function (posts) {
          $scope.title = "Blog";
          $scope.posts = posts;
        })
        .error(function (error) {
          console.log(error);
        });
    };

    $scope.findOne = function() {
      Posts.getDetail({id: $stateParams.id})
        .success(function (post) {
          $scope.post = post;
        })
        .error(function (error) {
          console.log(error);
        });
    };

    $scope.create = function() {
      var newpost = {};
      newpost.title = this.post.title;
      newpost.text = this.post.text;
      Posts.save(newpost)
        .success(function (post) {
          $state.go('blog index');
        })
        .error(function (error) {
          console.log(error);
        });
    };

    $scope.newComment = function() {
      var post = {}, newComment = {};
      post.id = $stateParams.id;
      newComment.user = this.comment.user;
      newComment.comment = this.comment.comment;
      post.comment = newComment;
      Posts.update(post)
        .success(function (post) {
          // $state.go('blog show', {id: post._id}); //No refresh data
          // $state.reload(); //Works, but is not necessary
          $scope.post = post;
          document.forms.postForm.reset();
        })
        .error(function (error) {
          console.log(error);
        });
    };
  }
]);
