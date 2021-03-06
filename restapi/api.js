const express = require("express");

const User = require("./models/userModel");
const router = express.Router();
const async = require("async");


// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({"role" : "User"}).sort("-_id"); //Inverse order
	res.send(users);
})

//register a new user / update location
router.post("/users/add", async (req, res) => {
    //Check if the user is already in the db
    let id = req.body.webId;
    let long = req.body.longitude;
    let lat = req.body.latitude;
    let user = await User.findOne({webId : id});
    let role = null;
    if (user != null){
        res.send({error: "Error: user already taken"});
    }else { //Create a new user
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
            await user.save();
            res.send(user);
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
    if (id != null){
        user = await User.findOne({webId: id});
    }else {
        user = null;
    }
    res.json(user);
});

//Add a location to a specific user
router.post("/locations/add", async(req, res) => {
    let id = req.body._id;
    let user = await User.findById(id);
    if(user != null){
        user.longitude = req.body.longitude;
        user.latitude = req.body.latitude;
        await user.save();
    }
    res.send(user);
});

//Convert from degrees to radians
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

//Get the distance in km between two coordinates
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

//Find the closest friends
router.post("/users/findNearest", async(req, res) => {
    let friends = req.body.friends;
    let id = req.body.webId;
    let user = await User.findOne({webId: id});
    let nearUser = null;
    let distance = 0;
    async.each(friends, async function(nearFriend){
        const friend = await User.findOne({webId: nearFriend});
        if(friend != null){
            let dis = distanceInKmBetweenEarthCoordinates(user.latitude,user.longitude,friend.latitude,friend.longitude);
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



module.exports = router;

