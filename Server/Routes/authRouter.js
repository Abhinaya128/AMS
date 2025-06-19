import express from "express"
import { adminLogin, empLogin, getAuthStatus, logout } from "../controller/authcontroller.js";

const authRouter=express.Router()

//admin login
authRouter.post("/admin/login",adminLogin)

//employee login
authRouter.post("/employee/login",empLogin)

//auth status verification
authRouter.get("/me",getAuthStatus)

authRouter.get("/logout",logout)


export default authRouter