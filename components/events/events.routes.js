const EventsController = require("./events.controller");
const express = require("express");
const router = express.Router();

router.get("/events", EventsController.getEvents);

module.exports = router;
