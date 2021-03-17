const mongoose = require("mongoose")


const schema = mongoose.Schema({
    date: Date,
    longitude: mongoose.Types.Decimal128,
    latitude: mongoose.Types.Decimal128, 
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})

module.exports = mongoose.model("Location", schema)