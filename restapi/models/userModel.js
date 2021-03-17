const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    biography: {
        type: String, 
        required: false
    },
    lastTimeOnline: {
        type: Date,
        default: Date.now
    }
})
 
module.exports = mongoose.model('User', UserSchema);