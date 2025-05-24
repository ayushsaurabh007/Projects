import express from "express"
import {registerUser , login} from "../controller/user.controller.js"


const router = express.Router()

router.post("/register" , registerUser)   //this is post request as we are submitting data not retriving it

router.get("/login" , login)

export default router
