const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    content: { type: String, required: true },
    commentCount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);