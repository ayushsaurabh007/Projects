import User from "../model/User.model.js"
import crypto from "crypto"          //this crypto is used to generate random tokens 
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

//-------------------------REGISTER------------------------
//get data
//validate
//check if user already exists
//create a user in database 
//create a verification token 
//save toke in database
//send token as email to user
//send success status to user

const registerUser = async (req, res) => {
    //get data 
    const { name, email, password } = req.body;
    //validate 
    if (!name || !email || !password) {
        return res.status(400).json({              //returning status code and a message as json object
            message: "All fields are required",
        });
    }
    console.log(email); //just to confirm everthing is good

    //checking if user already exists

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        //create a new user in database
        const user = await User.create({
            name,
            email,
            password
        })

        if (!user) {
            return res.status(400).json({
                message: "user not registered"
            })
        }

        //create verification token 
        const token = crypto.randomBytes(32).toString("hex")
        console.log(`token is ${token}`);

        //save the token in database
        user.verificationToken = token               

        await user.save()

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_POST,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const mailOption = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "verify your mail",
            text: `Please click on the following link:${process.env.BASE_URL}/api/v1/users/verify/${token}  ` //by clicking the url user will be registered 
            //write html here for a link 
        };  

        await transporter.sendMail(mailOption)       //this await not works because this mail service is not woking

        res.status(200).json({
            message: "User registered successfully",
            success: true
        })

    } catch (error) {                     //error message not updating 
        console.log(error)
        res.status(201).json({
            message: "User not registered ",
            error,
            success: false
        })
    }
    //create a verification token 

    //save token in database

    //send token as email to user

    //send success status to user 
};


//--------------VERIFICATION------------------
//WHAT WE DO FOR VALIDATION 
//get token from url 
//validate
//find user based on token 
//if not
//set isVerified field to true
//remove verification token 
//save
//return response 
const verifyUser = async (req , res) => {
    const {token} = req.params        //this is /verify/:token  (this token)
    if(!token){
        return res.status(400).json({
            message : "Invalid token"
        })
    }
    const user = await User.findOne({verificationToken : token})   //verificatioToken jiski value token h

    if(!user){
        return res.status(400).json({
            message : "Invalid token"
        })
    }
    user.isVerified = true
    user.verificationToken = undefined
    await user.save()
}

//-----------------LOGIN------------------
const login = async (req , res) => {
    const {email , password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message : "All feilds are required"
        })
    }

    try {
        const user = await User.findOne({email : email})  //can write ({email}) if both same 
        if(!user){
            return res.status(400).json({
                message : "Invalid email or password",
            });
        }
        const isMatch = await bcrypt.compare(password , user.password)        //which password is which

        console.log(isMatch);

        if(!isMatch){
            return res.status(400).json({
                message : "Invalid email or password",
            })
        }
        const token = jwt.sign({id : user._id} ,        //id is our variable and _id is stored in mongodb and user has acces to mongodb
            process.env.JWT_SECRETKEY , {                                //this shhhh is secret key and it should not be in this file but in .env file
                expiresIn: '24h'
            }
        )         
            
        const cookieOptions = {
            httpOnlu: true,
            secure: true,
            maxAge: 24*60*60*100*1000   //for how many time cookie will be alive 
        }
        res.cookie("test" , token , cookieOptions)
        res.status(200).json({
            success: true,
            message:"login succesfull",
            token,
            user:{
                id : user._id,
                name: user.name,
                role: user.role,
            },
        })
    } catch (error) {
        
    }
} 

export { registerUser , verifyUser , login}