const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const app = express(),
    port = 5000;

const User = require('./models/userModel'),
      Location = require ("./models/locationModel"),
      routes = require('./routes/userRoutes'),
      router = express.Router();

// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort('-_id') //Inverse order
	res.send(users)
})

//register a new user
router.post("/users/add", async (req, res) => {
    //Check if the user is already in the db
    let user = await User.findOne({ email: email })
    if (user)
        res.send({error:"Error: This user is already registered"})
    else{
        const user = new User(req.body);
        try{
            await user.save();
            res.status(201).send({user});
        }catch (e){
            res.status(400).send(e);
        }
    }
});

// add a new location associated to an user
router.post("locations/add", async(req, res) => {
    let user = req.body.user;
    let locName = req.body.location;
    let long = req.body.longitude;
    let lat = req.body.latitude;
    //Check if the device is already in the db
})

mongoose.connect('mongodb://database/27017/mongo_data', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended:true }));

app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => console.log(`API server listening on port ${port}`));

module.exports = router

