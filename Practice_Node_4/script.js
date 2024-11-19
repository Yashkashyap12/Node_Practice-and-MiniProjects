const express = require('express');
const app = express();

// for using middleware we can use this code

app.use(function(req,res,next){
    console.log("middleware chala");
    next();
})

app.use(function(req,res,next){
    console.log("middleware chala ek or baar");
    next();
})

app.get("/", function(req, res){
    res.send("Banke Bihari");
})

app.get("/profile", function(req, res){
    res.send("Hii Yash Kashyap");
})

app.get("/about", function(req, res, next){
    return next(new Error("Somenthing went wrong"))
})

//Erorr Handler code
app.use((err,req, res, next)=>{
    console.error(err.stack)
    res.status(500).send('Something Broke!')
})

app.listen(3000);
