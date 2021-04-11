const User = require("./models/userModel");
const mongoose = require("mongoose");

var mongo_uri = process.env.MONGO_URI || "mongodb://localhost:27017/api";

mongoose.connect(mongo_uri, { useNewUrlParser: true,useUnifiedTopology: true }).then(async () => {
    user = new User({
        webId: "https://radarintest.solidcommunity.net/profile/card#me",
        location: {
            "type": "Point",
            "coordinates": [0.0, 0.0]
        },
        role: "Admin"
    });
    await user.save();
    process.exit();
});