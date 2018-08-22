const express = require('express');
const router = express.Router();

// Require controller module

const level_controller = require("../controllers/levelController");
const member_controller = require("../controllers/memberController");

router.get('/', function(req, res, next) {
    res.send('API landing page');
  });

/* GET levels listing. */
router.get('/levels', level_controller.level_list);



/// MEMBERS ROUTES ///

// GET list of members //
router.get('/members', member_controller.member_list);

// Add a new member//
router.post('/members', member_controller.member_create_post);

module.exports = router;
