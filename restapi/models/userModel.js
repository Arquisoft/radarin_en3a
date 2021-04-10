const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    webId: String,
    location: {type: Schema.Types.Point},
    role: {
        type: String,
        enum: ['Admin','User'],
        default: 'User'
    }
});

UserSchema.index({location:'2dsphere'});
module.exports = mongoose.model('User', UserSchema);