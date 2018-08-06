const express = require('express');
const router = express.Router();

// Require controller module

const level_controller = require("../controllers/levelController");

/* GET levels listing. */
router.get('/', level_controller.level_list);

module.exports = router;
