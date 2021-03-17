const mongoose = require('mongoose'),
    User = mongoose.model('User');

const listUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err){
            res.send(err);
        }
        res.json(users);
    });
}

const createUser = (req, res) => {
    let user = User(req.body);
    user.save((err, user) => {
        if (err){
            res.send(err);
        }
        res.json(user);
    });    
}

const getUser = (req,res) => {
    User.findById(req.params.userId,(err,user) => {
        if (err){
            res.send(err);
        }
        res.json(user);
    });
}

const updateUser = (req,res) => {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new : true}, 
        (err, character) => {
            if (err){
                res.send(err);
            }
            res.json(user);
        });
}

const deleteUser = (req,res) => {
    User.remove({_id: req.params.userId}, (err, result) => {
        if (err){
            res.send(err);
        }
        res.json({message:'User succesfully deleted'});
    })
}

module.exports = {
    listUsers, 
    createUser,
    getUser, 
    updateUser,
    deleteUser
}