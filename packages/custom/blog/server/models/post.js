'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  text: String,
  comments: [{
    user: String,
    comment: String,
    created: {
      type: Date,
      default: Date.now
    }
  }]
});

PostSchema.virtual('created')
  .get(function(){
    return this._id.getTimestamp();
  });

PostSchema.set('toJSON', { virtuals: true });

mongoose.model('Post', PostSchema);