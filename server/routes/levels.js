const express = require('express');
const router = express.Router();

/* GET levels listing. */
router.get('/', function(req, res, next) {
  res.send('GET LEVELS: respond with a resource');
});

module.exports = router;
