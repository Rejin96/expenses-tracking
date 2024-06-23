const express = require("express");
const mongoose = require("mongoose");

const expenseRouter = require("./routes/expenseRouter");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());

mongoose
 .connect("mongodb://127.0.0.1:27017/expensedb")
 .then(()=>{
    console.log("Connected to DataBase");
 })
 .catch((err) => {
    console.log(err.message);
 });

app.get("/",(req,res) => {
    res.send("this is the new project");
});

app.use("/api/expenses",expenseRouter);
app.use("/api/user",userRouter);

//defining port address
app.listen(3000,() =>{
    console.log("Server is up and running");
});