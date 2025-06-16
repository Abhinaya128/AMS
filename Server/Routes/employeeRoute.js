import express from "express"
import { addEmployee, getAllemployees, getEmployee } from "../controller/employeecontroller.js"
import { adminVerify } from "../middleware/adminVerify.js"



const employeeRouter=express.Router()

//add employee
employeeRouter.post("/add",adminVerify,addEmployee)

//get all employees
employeeRouter.get("/all",adminVerify,getAllemployees)


//get loggedin employee
employeeRouter.get("/",getEmployee)

export default employeeRouter