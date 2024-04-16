const express = require('express');
const router = express.Router();
const {NonVerifiedPages} = require('../controllers/nonVerifiedPagesController');
const {VerifiedPurpose} = require('../controllers/verifiedPageContoller');

router.post('/nonverify', NonVerifiedPages);
router.post('/verify', VerifiedPurpose);

module.exports = router;
