const express = require("express");
const checkAuth = require("../middleware/checkAuth");
const authUser = require("../middleware/authUser");
const {addExpense,getExpense,updateExpense,deleteExpense,getExpenseofUser} = require("../controllers/expenseController");

const router = express.Router();

router.get("/",authUser,getExpenseofUser);
router.post("/",checkAuth,addExpense);
router.get("/server",getExpense);
router.put("/:id",updateExpense);
router.delete("/:id",deleteExpense);

module.exports = router;