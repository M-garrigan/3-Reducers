const router = require('express').Router();
const { densityData, populationData } = require('../controllers/popDataController.js');


router.get('/Density', densityData);
router.get('/Population', populationData);

module.exports = router;