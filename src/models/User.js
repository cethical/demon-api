const { Schema, model } = require('mongoose');

const User = Schema({
    hwid: { type: String, default: null },
    id: { type: String, default: null }
});

module.exports = model('User', User);