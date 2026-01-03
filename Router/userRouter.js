const express = require('express');
const router = express.Router();
const usercontroller = require('../Controllers/userController');

router.post('/users',usercontroller.createUser);
router.get('/users',usercontroller.getUser)

module.exports = router