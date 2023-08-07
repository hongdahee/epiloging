const express = require("express");

const calendarController = require("../controllers/calendar-controller");

const router = express.Router();

router.get("/:storageId", calendarController.getCalendar);

module.exports = router;
