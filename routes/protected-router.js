const express = require("express");
const router = express.Router();

const { myAccount } = require("../controllers/account-ctrl");
const { getTodos, addTodo } = require("../controllers/todo-ctrl");

router.get("/myaccount", myAccount);
router.get("/todos", getTodos);
router.post("/todo/add", addTodo);

module.exports = router;
