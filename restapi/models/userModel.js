const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    webId: String,
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        }
    },
    role: {
        type: String,
        enum: ['Admin','User'],
        default: 'User'
    }
});

UserSchema.index({location:'2dsphere'});
module.exports = mongoose.model('User', UserSchema);