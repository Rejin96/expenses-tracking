const express = require("express");

const app = express();

//define a route handler
app.get("/",(req,res) => {
    res.send("this is the new product");
})

//start the server and listen on port 3000
app.listen(3000,() => {
    console.log("The server is up and running");
});