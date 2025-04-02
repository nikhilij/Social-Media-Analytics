const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    mobileNo: { type: String, required: true },
    githubusername: { type: String, required: true },
    rollNo: { type: String, required: true },
    collegeName: { type: String, required: true },
    accesscode: { type: String, required: true },
    clientID: { type: String, required: true },
    clientsecret: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);