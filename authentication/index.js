import express from "express";
import dotenv from "dotenv";
import db from "./utils/db.js"
import userRoutes from "./routes/user.routes.js"


const app = express();

dotenv.config()
const PORT = process.env.PORT ;

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.get('/' , (req , res)=>{
    res.send("hello welcome to the backend folder")
})

db();


app.use("/api" , userRoutes)

app.listen(PORT , ()=>{
    console.log(`Listening to the port ${PORT}`)
})