const Expense = require("../models/expenseModel");

async function getExpense(req,res){
    try{
        let expenseId = req.query.expenseId;
        if(expenseId){
            let expense = await Expense.findById(expenseId);
            return res.send(expense);
        }
        let expense = await Expense.find().populate("addedBy","fullname-_id");
        res.send(expense);
    }catch(err){
        res.status(500).send({error:err.message});
    }
}

async function addExpense(req,res){
    let newexpense = req.body;
    let expense = await Expense.create({...newexpense,addedBy:req.user});
    res.send({message:"new expense added succesfully"});
}

async function updateExpense(req,res){
    let id = req.params.id;
    let updateFields = req.body;
    try{
        let expense = await Expense.findById(id);
        if(!expense){
            return res.status(404).send({message:"Expense not found"});
        }

        //iterate over the updateFields and update the expenses
        for(let key in updateFields){
            if(updateFields.hasOwnProperty(key)&&expense[key] !==undefined){
                if(typeof expense[key]=='number' && typeof updateFields[key]=='number'){
                    expense[key] = expense[key] + updateFields[key];
                }else{
                    expense[key] = updateFields[key];
                }
            }
        }
    
        await expense.save();

        res.send({message:"Expense Updated",expense})

    }catch(error){
        res.status(500).send({message:"Error updating expenses",error:error.message});
    }
}
async function deleteExpense(req,res){
    let id = req.params.id;
    await Expense.findByIdAndDelete(id);
    res.send({message:"Expense deleted Succesfully"});
}

async function getExpenseofUser(req, res) {
    try {
        const userId = req.user._id;
        const expenseId = req.query.expenseId;

        if (expenseId) {
            const expense = await Expense.findOne({ _id: expenseId, addedBy: userId });
            if (!expense) {
                return res.status(404).send({ message: "Expense not found" });
            }
            return res.send(expense);
        }

        const expenses = await Expense.find({ addedBy: userId }).populate("addedBy", "fullname -_id");
        res.send(expenses);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

exports.getExpenseofUser= getExpenseofUser;
exports.getExpense = getExpense;
exports.addExpense = addExpense;
exports.updateExpense = updateExpense;
exports.deleteExpense = deleteExpense;