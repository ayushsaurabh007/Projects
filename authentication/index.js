import express from "express"
import dotenv from "dotenv"
import cors from "cors"  
import db from "./utils/db.js";   //   ./utils/db        somethimes this also works 
import cookieParser from "cookie-parser";

//import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config()      //read dotenv file parse it and assign it to process.env file

const app = express() ;

//CORS(breif) -> we dont want any user to send request to the backend directly if that happens cors error 
app.use(     //we will learn about this after doing frontend 
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET' , 'POST' , 'DELETE' , 'OPTIONS'],
    allowedHeaders: ['content-type' , 'authorization']
  })
);

app.use(express.json())    //accept json format (this is a middleware)
app.use(express.urlencoded({extended:true}))   //to accept the url encodding     (this is also a middle ware)

app.use(cookieParser())   //can access cookies 


const port = process.env.PORT || 3000 ;

app.get('/' , (req , res) => {
  res.send("hello backend !");
})

app.get('/ayush', (req, res) => {         //route , controller 
  res.send('ayush !')
})

app.get('/saurabh' , (req , res) => { 
    res.send("saurabh !");
})

//connect to db 
db();

//user routes
app.use("/api/v1/users/" , userRoutes)

app.listen(port , () => {
  console.log(`Example app listening on port ${port}`)
})