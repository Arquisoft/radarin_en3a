const express = require('express');

const User = require('./models/userModel');
const router = express.Router();


// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({"role" : "User"}).sort('-_id') //Inverse order
	res.send(users);
})

//register a new user / update location
router.post("/users/add", async (req, res) => {
    console.log("entramos en restapi");
    //Check if the user is already in the db
    let id = req.body.webId;
    let long = req.body.longitude;
    let lat = req.body.latitude;
    let user = await User.findOne({webId : id});
    console.log("encontramos el usuario");
    if (user != null)
        res.send({error: "Error: user already taken"});
    else { //Create a new user
        console.log("creamos un nuevo usuario");
        user = new User({
            webId: id,
            longitude: long,
            latitude: lat,
            role: "User"
        });
        try{
            console.log("guardando al usuario");
            await user.save();
            res.send(user);
            console.log("usuario añadido");
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
    let user = null;
    if (id != null)
        user = await User.findOne({webId: id});
    else 
        user = null;
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
    user.longitude = req.body.longitude;
    user.latitude = req.body.latitude;
    await user.save();
    res.send(user);
});

module.exports = router

