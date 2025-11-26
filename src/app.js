const express = require("express");
const app = express();

app.use("/support",(req,res)=>{
    res.send("hell bro");
});

app.get("/home",(req,res)=>{
    res.send({firstname:"John",lastname:"pagla"});
});
app.get("/ab\\+c",(req,res)=>{
    res.send({firstname:"John",lastname:"kumar"});
});
app.get("/ab\\?c",(req,res)=>{
    res.send({firstname:"John",lastname:"singh"});
});
app.get("/ab\\*cd",(req,res)=>{
    res.send({firstname:"John",lastname:"namaste"});
});
app.get("/a\\(bc\\)\\?d",(req,res)=>{
    res.send({firstname:"John",lastname:"bhai"});
});



app.post("/test",(req,res)=>{
    res.send("Hello test");
});
app.delete("/",(req,res)=>{
    res.send("deleted all files");
});
app.use((req, res) => {
  res.status(404).send({ error: "Route not found" });
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
