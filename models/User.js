const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id : {type : 'string', required: true},
    email : {type : 'string', required: true},
    mdp : {type : 'string', required: true},
    num : {type : 'string'},
})

module.exports = mongoose.model('User', userSchema);