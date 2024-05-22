const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    token: String

})
const user = mongoose.model('user', userSchema);

module.exports = user;
