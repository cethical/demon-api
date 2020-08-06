const router = require('express').Router();

const controller = require('../controllers');

router.get('/', controller.home);

module.exports = router;