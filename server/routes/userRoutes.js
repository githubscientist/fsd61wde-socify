const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../utils/auth');
const upload = require('../utils/upload');

const userRouter = express.Router();

userRouter.get('/', auth.checkAuth, userController.getUser);
userRouter.put('/', auth.checkAuth, userController.updateUser);
userRouter.put('/profilePicture', auth.checkAuth, upload.single('profilePicture'), userController.updateProfilePicture);
userRouter.delete('/', auth.checkAuth, userController.deleteUser);

module.exports = userRouter;