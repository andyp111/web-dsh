const router = require('express').Router();
const psqlController = require('./controller/psqlcontroller.js');

router
    .route('/test')
    .get(psqlController.getUserInfo)


module.exports = router