const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Countries = require('./Countries')
const Activities = require('./Activities')
const FilterActivity = require('../controllers/FilterActivity');
const ActivityDelete = require('../controllers/ActivityDelete');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', Countries)
router.use('/activities', Activities)
router.use('/filter', FilterActivity)
router.use('/delete', ActivityDelete)


module.exports = router;
