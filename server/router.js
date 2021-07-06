const router = require('express').Router();
const psqlController = require('./controller/psqlcontroller.js');

router
    .route('/test')
    .get(psqlController.getUserInfo)

router
    .route('/signup')
    .post(psqlController.userSignUp)

router
    .route('/login')
    .post(psqlController.userLogIn)

router
    .route('/home/:id')
    .get(psqlController.getPostInfo)

module.exports = router