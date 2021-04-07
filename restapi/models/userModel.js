const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs'); //To encrypt the password in mongoose

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true //To store data deleting white spaces
    },
    password: {
        type: String,
        default: "qwerty",
        minlength: 6,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: { //We don't trim as there could be more than one surname
        type: String,
        required: true 
    },
    biography: {
        type: String,
        default: "Hello there! I'm getting to use Radarin.",
        required: false
    },
    lastTimeOnline: {
        type: Date,
        default: Date.now
    },
    longitude: Number,   
    latitude: Number,
    altitude: Number,     
});

//Hash the password before saving it
UserSchema.pre("save", async function(next) {
    const user = this;
    if (user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

module.exports = mongoose.model('User', UserSchema);