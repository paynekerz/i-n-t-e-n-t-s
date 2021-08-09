const { Schema, model } = require('mongoose');

const blogPostSchema = require('./BlogPost')

const parkSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            unique: true,
        },
        parkCode: {
            type: String,
            required: true,
            unique: true
        },
        state: {
            type: String,
            required: true,
        },
        blogPosts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'BlogPost'
            },
        ], 
    }
);

const Park = model('Park', parkSchema);

module.exports = Park; 
