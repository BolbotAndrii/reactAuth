const { Schema, model } = require('mongoose')

const user = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    group: {type: String, required: true, default: 'guest'},
    created: { type: Date, default: Date.now }
})

module.exports = model('User', user)