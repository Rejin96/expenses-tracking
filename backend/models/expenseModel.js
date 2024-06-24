const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    month:String,
    food:Number,
    rent:Number,
    travel:Number,
    other:Number,
    addedBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    }
})

const Expense = mongoose.model('Expense',expenseSchema);
module.exports = Expense;