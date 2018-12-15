
const router = require('express').Router();
const { populationTop10 } = require('../controllers/populationController');
const { defaultListOfStates } = require('../controllers/statesController.js');

router.get('/population_top10', populationTop10);
router.get('/render', defaultListOfStates);

module.exports = router;
