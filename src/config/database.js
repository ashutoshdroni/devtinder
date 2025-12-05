const mongoose = require("mongoose");
const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://ashutoshdroni:C9Eg33gCM76fU6pz@cluster0.srh64vw.mongodb.net/devTinder"
    );
};

module.exports=connectDB;