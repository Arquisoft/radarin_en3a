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

//register a new user / update location
router.post("/users/add", async (req, res) => {
    //Check if the user is already in the db
    let user = await User.findOne({webId : req.body.webId});
    if (user)
        res.send({error: "Error: user already taken"});
    else { //Create a new user
        const newUser = new User(req.body);
        try{
            await newUser.save();
            res.status(201).send({newUser});
        }catch (e){
            res.status(400).send(e);
        }
    }
});

//Delete a specific user
router.post("/users/remove", async (req,res) => {
    let id = req.body.webId;
    let user = await User.deleteOne({webId: id});
    res.json(user);
});

//Get user by webId
router.post("/users/getByWebId", async (req,res) => {
    let id = req.body.webId;
    let user = await User.findOne({webId: id});
    res.json(user);
});

//Add a location to a specific user
router.post("/locations/add", async(req, res) => {
    let user = await User.findOne({webId: req.body.webId});
    user.location = req.body.location;
    await user.save();
    res.json(user);
});

//Update a location to a specific user
router.post("users/location/update", async(req, res) => {
    let user = await User.findOne({webId: req.body.webId});
    user.location = req.body.location;
    await user.save();
    res.json(user);
});

module.exports = router

