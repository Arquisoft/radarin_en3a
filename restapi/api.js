/*
const express = require("express")
const User = require("./models/userModel")
const router = express.Router()

// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort('-_id') //Inverse order
	res.send(users)
})

//register a new user
router.post("/users/add", async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    await user.save()
    res.send(user)
    //Check if the device is already in the db
    let user = await User.findOne({ email: email })
    if (user)
        res.send({error:"Error: This user is already registered"})
    else{
        user = new User({
            name: name,
            email: email,
        })
        await user.save()
        res.send(user)
    }
})

module.exports = router
*/
const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const app = express(),
    port = 5000;

const User = require('./restapi/models/userModel'),
    routes = require('./restapi/routes/userRoutes');

mongoose.connect('mongodb://database/27017/mongo_data', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended:true }));

app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => console.log(`API server listening on port ${port}`));

