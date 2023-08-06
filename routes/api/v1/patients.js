const express = require('express');
const router = express.Router();
const passport = require('passport');

const patientController = require('../../../controllers/api/v1/patient_controller');

router.post('/register', passport.authenticate('jwt', {session: false}), patientController.reg);
router.post('/create_report', passport.authenticate('jwt', {session: false}), patientController.createReport);
router.post('/list_all_reports', passport.authenticate('jwt', {session: false}), patientController.listAllReports);

module.exports= router;