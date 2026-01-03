const express = require('express');
const router = express.Router();
const usercontroller = require('../Controllers/userController');

router.post('/users',usercontroller.createUser);
router.get('/users',usercontroller.getUser)
router.put('/users/id',usercontroller.updateUser);
router.delete('/users/id',usercontroller.deleteUser);

module.exports = router