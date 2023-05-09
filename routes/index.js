const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res)=> res.send('Bienvenido a la API Magos'))

router.post('/harry', controllers.createharry);
router.get('/harry', controllers.getAllharry);

module.exports = router;