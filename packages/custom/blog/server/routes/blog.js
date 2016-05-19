'use strict';

var posts = require('../controllers/posts');

module.exports = function(Blog, app, auth, database) {

  app.route('/api/posts')
    .get(posts.get)
    .post(posts.save);
  app.route('/api/posts/:id')
    .get(posts.getDetail)
    .put(posts.update);

};
