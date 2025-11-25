const express = require("express");
const app = express();

app.use("/support",(req,res)=>{
    res.send("Hello ashu");
});
app.use("/home",(req,res)=>{
    res.send("Hello bro");
});
app.use("/test",(req,res)=>{
    res.send("Hello test");
});
app.use("/",(req,res)=>{
    res.send("Hello World");
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
