const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


const $rdf = require('rdflib');
const auth = require('solid-auth-cli');
const store = $rdf.graph();
const fetcher = $rdf.fetcher( store, {fetch:auth.fetch} );
const client = new SolidNodeClient();

const app = express(),
    port = 5000;

const User = require('./models/userModel'),
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
    let user = await User.findOne({ profile: profile })
    if (user)
        await User.updateOne({'profile':profile}, { $set: req.body }); //Just update the location
    else { //Create a new user
        const user = new User(req.body);
        try{
            await user.save();
            res.status(201).send({user});
        }catch (e){
            res.status(400).send(e);
        }
    }
});

//Login 
router.post("users/login", async(req,res) => {
    try{
        let client = await.client.login({
            profile: req.body.profile,
            email: req.body.email,
            password: req.body.password
        });
    }
})

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

