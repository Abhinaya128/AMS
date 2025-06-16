//import Asset from "../models/assets.js"
import Employee from "../models/employee.js"
import { verifyToken } from "../utils/jwt.js"
import { sendEmail } from "../utils/nodemailer.js"

export const addEmployee=async (req,res,next)=>{
    try{
          const empDetails=new Employee(req.body)
            await empDetails.save()
            await sendEmail({
                to:empDetails.email,
                subject:"your employee credentails created successfully",
                text:`Hi ${empDetails.name},
                welcome to our company
                you can login to the company website using these details 
                empId=${empDetails.empId},
                password=${empDetails.password}`
            })
           res.status(201).send({message:"employee details Added"})
    }
    catch(error){
        next(error)
    }
}
export const getAllemployees=async(req,res,next)=>{
    try{
       const allEmployees=await Employee.find({},{password:0,__v:0,_id:0,createdAt:0,updatedAt:0})
       return res.status(200).send(allEmployees)
    }
    catch(error){
        next(error)
    }
}

export const getEmployee=async(req,res,next)=>{
    try{
       const {token}=req.cookies
       if(token){
         const {id}=verifyToken(token)
         if(id){
            const isEmployee=Employee.findById(id,{password:0,__v:0,_id:0})
            if(isEmployee){
                return res.status(200).send(isEmployee)
             }else{
                throw new Error("Invalid User Details")
                 }
         }else{
        throw new Error("Unknown Token")
       }
       }
       else{
        throw new Error("Token not found")
       }
    }
    catch(error){
        next(error)
    }
}

