const router = require('express').Router();

const controller = require('../controllers');
const middleware = require('../middlewares');

// get
router.get('/', controller.alive);
router.get('/v1', controller.v1.launch);
router.get('/v1/download', controller.v1.download);
router.get('/v1/verify', middleware.isAdded, controller.v1.verify);
router.get('/v1/config', middleware.isAdded, controller.v1.config);
router.get('/v1/updates', middleware.isAdded, controller.v1.updates);
router.get('/v1/settings', middleware.isAdded, controller.v1.settings);

// post
router.post('/v1/supersecret', middleware.isAdmin, controller.v1.hwid);

// middleware
router.use('/', controller.error);

module.exports = router;