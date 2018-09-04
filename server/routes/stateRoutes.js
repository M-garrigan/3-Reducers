const router = require('express').Router();
const { renderStates } = require('../controllers/statesController.js');

router.get('/render', renderStates);

module.exports = router;