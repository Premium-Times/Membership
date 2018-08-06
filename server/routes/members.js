const express = require('express');
const router = express.Router();

/* GET members listing. */
router.get('/', function(req, res, next) {
  res.send('MEMBERS respond with a resource');
});

module.exports = router;
