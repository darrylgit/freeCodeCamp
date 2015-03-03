var mongoose = require('mongoose');
var secrets = require('../config/secrets');

var storySchema = new mongoose.Schema({
    headline: {
        type: String,
        unique: false
    },
    link: {
        type: String,
        unique: false
    },
    body: {
        type: String,
        unique: false
    },
    rank: {
        type: Number,
        default: -Infinity
    },
    upVotes: {
        type: Array,
        default: []
    },
    author: {},
    comments: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Story', storySchema);

