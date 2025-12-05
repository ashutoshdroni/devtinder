const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    
    firstName:{
        
        type:String,
        required:true,
        minlength:8,
        maxlength:20,
    },
    lastName:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
    },
    age:{
        type:Number,
        min:18,
        max:65,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male",female,"other"].includes(value)){
                throw new Error("Gender must be male,female or other");
            }
        }
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid"+value);
            }
        }       


    },
    password:{
        type:String,
    },
    
},

{  
    timestamps:true,
}
);
const user = mongoose.model("User",userSchema);
module.exports=user;    