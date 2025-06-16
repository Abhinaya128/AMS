

import Admin from "../models/admin.js"
import { verifyToken } from "../utils/jwt.js"

export const adminVerify= async (req,res,next)=>{
    try{
      const {token}=req.cookies
      const {id}=verifyToken(token)
      //check the id id valid or not
      const isAdmin=await Admin.findById(id)
      console.log("Cookies in request:", req.cookies);

      if(isAdmin){
        next()
      }else{
        throw new Error("Invalid Admin Credential")
      }
    }
    catch(error){
       throw new Error(error)
    }
}