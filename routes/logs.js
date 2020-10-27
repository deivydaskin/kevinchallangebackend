const express = require("express");
const router = express.Router();

const LogController = require("../controller/logs");

router.route("/").get(LogController.getLogs);

router.route("/").post(LogController.addLog);

module.exports = router;
