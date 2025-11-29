const express = require("express");
const app = express();
const connectDB =require("./config/database"); 
const user =require("./models/user");
//const {adminAuth} = require("./middlewares/auth");
//app.use("/admin",adminAuth);

//app.get("/getuserData", (req, res) => {
  //  throw new Error("dvchsh");
    //res.send("Here is the protected data for admin.");    
//});

//app.use("/", (err,req, res,next) => {
    //if(err){
    //    res.status(400).send("Something went !");
   // }

//});
//app.get("/getuserData", (req, res) => {
   // try{
    //    throw new Error("dvchsh");
      //  res.send("Here is the protected data for admin."); 
    //}catch(err){
     //   res.status(500).send("Something went wrong!");
    //}
       
//});



//creating apii



app.post("/signup",async(req,res)=>{
    const newUser=new user({
        firstName:"Ashutosh",
        lastName:"Droni",
        email:"droniashutosh2@gmail.com",
        password:"ashu1234"
    });
    await newUser.save();
    res.send("User signed up successfully");
});









connectDB()
.then(()=>{
    console.log("Database connected successfully");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
});

}).catch((err)=>{
    console.log("Database connection failed",err);
});  