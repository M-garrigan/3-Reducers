
const router = require('express').Router();
const { 
  populationTop10, 
  populationTop5,
  populationBottom10, 
  populationBottom5  
} = require('../controllers/populationController');
const { defaultListOfStates } = require('../controllers/statesController.js');

router.get('/population_top10', populationTop10);
router.get('/population_top5', populationTop5);
router.get('/population_bottom10', populationBottom10);
router.get('/population_bottom5', populationBottom5);

router.get('/render', defaultListOfStates);

module.exports = router;
