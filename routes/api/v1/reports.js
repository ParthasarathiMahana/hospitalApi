const express = require('express');
const router = express.Router();
const passport = require('passport');

const reportController = require('../../../controllers/api/v1/report_controller');

router.post('/', passport.authenticate('jwt', {session: false}), reportController.filterReportByStat);

module.exports = router;