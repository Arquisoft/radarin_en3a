const express = require('express');

const User = require('./models/userModel');
const router = express.Router();
const async = require("async");


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
    let role = null;
    console.log("encontramos el usuario");
    if (user != null)
        res.send({error: "Error: user already taken"});
    else { //Create a new user
        console.log("creamos un nuevo usuario");
        if (id === "https://radarintest.solidcommunity.net/profile/card#me"){
            role = "Admin";
        }
        else {
            role = "User";
        }
        user = new User({
            webId: id,
            longitude: long,
            latitude: lat,
            role: role
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
    let id = req.body._id;
    console.log(id);
    let user = await User.findById(id);
    console.log(user);
    if(user != null){
        user.longitude = req.body.longitude;
        user.latitude = req.body.latitude;
        await user.save();
    }
    res.send(user);
});

router.post("/users/findNearest", async(req, res) => {
    let friends = req.body.friends;
    let id = req.body.webId;
    let user = await User.findOne({webId: id});
    let nearUser = null;
    let distance = 0;
    console.log(friends);
    async.each(friends, async function(nearFriend){
        console.log(nearFriend);
        const friend = await User.findOne({webId: nearFriend});
        if(friend != null){
            let dis = distanceInKmBetweenEarthCoordinates(user.latitude,user.longitude,friend.latitude,friend.longitude);
            console.log("User " + nearFriend + " is this distance away: " + dis);
            if(nearUser == null){
                nearUser = friend;
                distance = dis;
            }else if(dis<distance){
                    nearUser = friend;
                    distance = dis;
            }
        }
    }, async function(err){
        if(err){
            res.status(500).send(err);
        }else{
            if(nearUser == null){
                res.send("No nearby user");
            }else{
                res.send(nearUser.webId + " is near you");
            }
        }
    });
    

});

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  
function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;
  
    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);
  
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadiusKm * c;
}

module.exports = router

