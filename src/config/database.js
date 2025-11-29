const mongoees = require('mongoose');

const connectDB=async()=>{
    await mongoees.connect(
        "mongodb+srv://ashutoshdroni:C9Eg33gCM76fU6pz@cluster0.igcyffb.mongodb.net/devTinder"
    );
};
module.exports=connectDB;