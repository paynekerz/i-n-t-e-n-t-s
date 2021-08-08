const { Schema, model } = require('mongoose');

const postSchema = require('./Post')

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
                ref: 'Post'
            },
        ], 
    }
);

const Park = model('Park', parkSchema);

module.exports = Park;