const mongoees = require('mongoose');

const userSchema = new mongoees.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});
const User = mongoees.model("User",userSchema);
module.exports=User;    