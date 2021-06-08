const router = require('express').Router();
const psqlController = require('./controller/psqlcontroller.js');

router
    .route('/test')
    .get(psqlController.getUserInfo)

router
    .route('/signup')
    .post(psqlController.userSignUp)

module.exports = router