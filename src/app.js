const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User =require("./models/user");
app.use(express.json());


app.post("/signup",async (req,res) => {
    const user = new User(req.body);
    try{
        await user.save();
    res.send("User added successfully");
    }catch(err){
        res.status(400).send(err);
    }
});
app.get("/feed",async (req,res) => {
    try{
        const users = await User.find({});
        res.send(users);
    }catch(err){
        res.status(500).send(err);
    }
});

app.get("/users",async (req,res) => {
    const userEmail=req.body.email;
    try{
        const users = await User.find({email:userEmail});
        res.send(users);
    }catch(err){
        res.status(500).send(err);
    }
});
app.delete("/user",async (req,res) => {
    const userId =req.body.userId;
    try{
        const user = await User.findByIdAndDelete({_id:userId});
        res.send("user deleted successfully");
    }catch(err){
        res.status(500).send(err);
    }
});
app.patch("/userrs",async (req,res) => {
    const userId =req.body.userId;
    const data = req.body;
    try{
        const AllowedUpdates=["age","gender","password"];
        const isupdateAllowed=Object.keys(data).every((k)=>{
            return AllowedUpdates.includes(k);
        });
        if(!isupdateAllowed){
            throw new Error("Invalid updates!");    
        }
        const user = await User.findByIdAndUpdate({_id:userId},data,{
            returnDocument:"after",
            runValidators:true,
        });
        res.send("user added successfully" + user);     

    }catch(err){
        res.status(500).send(err);

    }
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

