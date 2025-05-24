import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name : String , 
    email : String , 
    password : String , 
    role : {
        type : String 
    },
    isVerified : {
        type : Boolean , 
        default : false
    },
    verificaitonToken : {
        type : String
    },
    resetPasswordToken : {
        type : String
    },
    resetPasswordExpires : {
        type : Date
    },
},
    {
        timestamps : true,   //this saves the current time of document created and also when it was updated 
    }
)


const User = mongoose.model("User" , userSchema);

export default User