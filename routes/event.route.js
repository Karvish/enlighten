const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller.js");

router.get('/getEvents', eventController.getEvents);
router.post('/event', eventController.postEvent);

module.exports = router;