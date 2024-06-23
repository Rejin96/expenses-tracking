const Expense = require("../models/expenseModel");

async function getExpense(req,res){
    try{
        let expense = await Expense.find();
        res.send(expense);
    }catch(err){
        res.status(500).send({error:err.message});
    }
}

async function addExpense(req,res){
    let newexpense = req.body;
    let expense = await Expense.create(newexpense);
    res.send({message:"new expense added succesfully"});
}

exports.getExpense = getExpense;
exports.addExpense = addExpense;