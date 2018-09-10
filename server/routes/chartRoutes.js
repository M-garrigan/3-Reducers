const router = require('express').Router();
const { chartDensity, chartPopulation } = require('../controllers/chartController.js');

router.get('/Density', chartDensity);
router.get('/Population', chartPopulation);

module.exports = router;