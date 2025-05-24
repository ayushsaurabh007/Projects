import User from "../model/User.model.js"
import crypto from "crypto"

//register controller
const registerUser = async(req , res)=>{
    const {name , password} = req.body ;

    if(!name || !password){
        return res.status(400).json({
            message: "All fields are required",
        });
    }


    try {
        const exitstUser = await User.findOne({name})
        if(exitstUser){
            return res.status(200).json({
                message : "User already exists"
            })
        }

        const user = await User.create ({
            name ,
            password
        })

        if(!user){
            return res.status(400).json({
                message : "user not registered"
            })
        }
        user.isVerified = true;
        const token = crypto.randomBytes(32).toString("hex")
        console.log(`token is ${token}`);  //to check if token is formed or not 
        user.verificaitonToken = token;
        await user.save();

    } catch (error) {
        console.log(error)
        res.status(201).json({
            message: "user not registered",
            error,
            success: false
        })
    }
};

//verification controller
const login = async(req , res) => {
    const {name , password} = req.body;
    if(!name || !password){
        res.status(400).json({
            message : "All feilds are required"
        })
    }
    try {
        const user = await User.find({name })
        if(!user){
            res.status(400).json({
                message : "Invalid email or password"
            })
        }
        if(user){
            //console.log(`user is ${user}`)
            res.status(200).json({
                message : "user exists"
            })
        }
    }catch(error){
        console.log(error)
    }

}


export {registerUser , login}