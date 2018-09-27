
const router = require('express').Router();
const { seedState } = require('../controllers/seedController.js');

router.put('/', seedState);

module.exports = router;