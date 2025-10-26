import mongoose from "mongoose"; 
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name :String ,
    email : String,
    password : String,
    role : {
        type : String
    },
    isVerified : {
        type : Boolean , 
        default : false
    },
    verificationToken : {
        type : String 
    },
    resetPasswordToken : {
        type : String 
    },
    resetPasswordExpires : {
        type : Date 
    },
}, {
    timestamps : true ,
});

//hooks -> before(pre) and after(post) saving to the database you want to perform certain task 
userSchema.pre("save" , async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password , 10)  //WHY AWAIT NOT WORKING
    }
    next()   //this next tells to do the next task (which hook stopped)
})

const User = mongoose.model("User" , userSchema);


export default User