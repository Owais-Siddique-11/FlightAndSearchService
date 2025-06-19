const express= require('express');
const CiryController = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city',CiryController.create);

module.exports = router;