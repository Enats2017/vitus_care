const express = require("express");
const router = express.Router();
const { getBlogs } = require("../controller/controller");

router.get("/blogs", getBlogs);

module.exports = router;
