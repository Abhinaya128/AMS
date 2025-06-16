import express from "express"
import { adminLogin } from "../../controller/authcontroller.js"



const adminAuthRouter=express.Router()

//login
adminAuthRouter.post("/login",adminLogin)


export default adminAuthRouter