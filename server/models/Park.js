const { Schema, model } = require('mongoose');

const blogSchema = require('./Blog')

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
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Blog'
            },
        ], 
    }
);

const Park = model('Park', parkSchema);

module.exports = Park; 
