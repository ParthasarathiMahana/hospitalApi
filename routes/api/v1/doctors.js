const express =require('express');
const router = express.Router();
const doctorsApi = require('../../../controllers/api/v1/doctors_controller');

router.get('/', doctorsApi.index);
router.post('/register', doctorsApi.reg);
router.post('/login', doctorsApi.createSession);


module.exports = router;