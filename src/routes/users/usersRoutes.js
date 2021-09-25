const express = require('express');
const { registerUser, fetchUsers } = require('../../controllers/users/usersCtrl.js');
const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.get('/', fetchUsers);


module.exports = userRouter;