const express = require('express');
const {appointmentMail, greenField, feedback, brownField, doctorPartnership} = require('../helper/mailer')

const router = express.Router();

router.post('/appointment-booking',appointmentMail);
router.post('/green-field-enquiry',greenField)
router.post('/feedback-form', feedback)
router.post('/setup-new-dialysis-unit', brownField)
router.post('/doctor-partnership', doctorPartnership)

module.exports = router;