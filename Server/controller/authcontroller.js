import Admin from "../models/admin.js"
import Employee from "../models/employee.js"
import { generateToken } from "../utils/jwt.js"
export const adminLogin=async(req,res,next)=>{

    try{
         const{email,password}=req.body

         if(email && password){
         const isAdmin= await Admin.findOne({email})
         if(isAdmin){
            if(password===isAdmin.password){
                //send the admin id as a token in cookies
                const token=generateToken({id:isAdmin._id})
                res.cookie("token",token,{maxAge:1000*60*60*24*7,httpOnly:true})
                return res.status(200).send({message:"Login successful"})
            }else{
                throw new Error ("password not matched")
                //  return res.status(401).send({error:"Incorrect password"})
            }
         }
         
         else{
            throw new Error("user details not found")
            //  return res.status(404).send({error:"Admin not found"})
         }
         }
         else{
            throw new Error("provide all fields")
            // return res.status(400).send({error:"Provide all the fields"})
         }
    }
    catch(error){
        next (error)
//    return req.status(500).send({error:"Something went wrong",msg:error.message})
    }
}
export const empLogin = async (req, res, next) => {
   try{
         const{email,password,empId}=req.body
         if(password && email ||empId){
         let isEmp;
         if(email){
         isEmp= await Employee.findOne({email})
         }else{
          isEmp =await Employee.findOne({empId})
         }
         if(isEmp){
            if(password===isEmp.password){
                //send the admin id as a token in cookies
                const token=generateToken({id:isEmp._id})
                res.cookie("token",token,{maxAge:1000*60*60*24*7,httpOnly:true})
                return res.status(200).send({message:"Login successful"})
            }else{
                throw new Error ("password not matched")
                //  return res.status(401).send({error:"Incorrect password"})
            }
         }
         
         else{
            throw new Error("user details not found")
            //  return res.status(404).send({error:"Admin not found"})
         }
    }
    else{
           throw new Error("user details not found")
         }
  
      }
    catch(error){
        next (error)
//    return req.status(500).send({error:"Something went wrong",msg:error.message})
    }
  }
