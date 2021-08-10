const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const blogPostSchema = new Schema({
  blogPostText: {
    type: String,
    required: 'You need some text first!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  blogPostAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  parkCode: {
    type: String,
    required: true,
    unique: true,
    minlength: 1
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const BlogPost = model('BlogPost', blogPostSchema);

module.exports = BlogPost;
