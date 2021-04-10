/*
GET /restapi/listUsers
POST /restapi/listUsers
GET /restapi/users/:userId
PUT /restapi/users/:userId
DELETE /restapi/users/:userId
*/

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/restapi/users', userController.listUsers);
router.post('/restapi/users', userController.createUser);
router.get('/restapi/users/:userId', userController.getUser);
router.put('/restapi/users/:userId', userController.updateUser);
router.put('/restapi/users/:userId', userController.deleteUser);

router.get('*', (req,res) => {
    res.end('This route does not exist');
});

module.exports = router;