'use strict';

var mongoose = require('mongoose'),
  Post = mongoose.model('Post');

exports.get = function(req, res) {
  Post.find({}, '_id title text created', function(error, Posts) {
    if (error) return res.status(500).json({ error: 'Cannot list the Posts' });
    res.json(Posts);
  });
};

exports.save = function(req, res) {
  Post.create(req.body, function(error, PostCreated) {
    if (error) return res.status(500).json({ error: 'Cannot create the Post' });
    res.json(PostCreated);
  });
};

exports.getDetail = function(req, res) {
  Post.findOne({_id: req.params.id}).exec(function(error, PostFound) {
    if (error) return res.status(500).json({ error: 'Cannot get the Post' });
    res.json(PostFound);
  });
};

exports.update = function(req, res) {
  Post.findOne({_id: req.params.id}).exec(function(error, PostFound) {
    if (error) return res.status(500).json({ error: 'Cannot update the Post' });
    PostFound.comments.push(req.body);
    PostFound.save(function(error, PostUpdated) {
      res.json(PostUpdated);
    });
  });
};