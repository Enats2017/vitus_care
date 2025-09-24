// routes/applicationRoutes.js
const express = require("express");
const { applyJob } = require("../controller/controller");
const upload = require("../helper/multer");


const router = express.Router();
router.post("/apply", upload.single("cv"), applyJob);
module.exports = router;
