const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    food:Number,
    rent:Number
})

const Expense = mongoose.model('Expense',expenseSchema);
module.exports = Expense;