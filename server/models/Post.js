const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
     postTxt: {
         type: String,
         required: 'You need to have text in your post',
         minlength: 1,
         trim: true
     },
     postAuthor: {
         type: String,
         required: true,
         trim: true
     },
     createdAt: {
         type: Date,
         default: Date.now,
         get: (timestamp) => dateFormat(timestamp),
     },
     comments: [
         {
            commentTxt: {
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

const Post = model('Post', postSchema);

module.exports = Post;
