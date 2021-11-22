const express = require("express");
const router = express.Router();

const { myAccount } = require("../controllers/account-ctrl");
const { getTodos } = require("../controllers/todo-ctrl");

router.get("/myaccount", myAccount);
router.get("/todos", getTodos);

module.exports = router;
