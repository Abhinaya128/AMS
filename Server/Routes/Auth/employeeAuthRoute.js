import express from "express"
import { empLogin } from "../../controller/authcontroller.js"

const employeeAuthRouter=express.Router()
employeeAuthRouter.post("/login",empLogin)

export default employeeAuthRouter