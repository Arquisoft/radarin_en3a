const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true)
const UserSchema = new mongoose.Schema({
    webId: String,
    longitude: Number,
    latitude: Number
});

UserSchema.index({location:'2dsphere'});
module.exports = mongoose.model('User', UserSchema);