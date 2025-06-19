import Admin from "../models/admin.js"
import Employee from "../models/employee.js"
import { generateToken, verifyToken } from "../utils/jwt.js"
export const adminLogin=async(req,res,next)=>{

    try{
         const{email,password}=req.body

         if(email && password){
         const isAdmin= await Admin.findOne({email})
         if(isAdmin){
            if(password===isAdmin.password){
                //send the admin id as a token in cookies
                const token=generateToken({id:isAdmin._id,role:"admin"})
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
    }
}

// export const empLogin = async (req, res, next) => {
//    try{
//          const{email,password,empId}=req.body
//            console.log("Login request body:", req.body);
//         if ((email || empId) && password) {
//          let isEmp;
//          if(email){
//          isEmp= await Employee.findOne({email})
//          }else{
//           isEmp =await Employee.findOne({empId})
//          }
//          if(isEmp){
//             if(password===isEmp.password){
//                 //send the admin id as a token in cookies
//                 const token=generateToken({id:isEmp._id,role:"employee"})
//                 res.cookie("token",token,{maxAge:1000*60*60*24*7,httpOnly:true})
//                 return res.status(200).send({message:"Login successful"})
//             }else{
//                 throw new Error ("password not matched")
//                 //  return res.status(401).send({error:"Incorrect password"})
//             }
//          }
         
//          else{
//             throw new Error("user details not found")
//             //  return res.status(404).send({error:"Admin not found"})
//          }
//     }
//     else{
//            throw new Error("user details not found")
//          }
  
//       }
//     catch(error){
//   console.error("Login error:", error.message); // Helpful log
//   return res.status(500).json({ error: "Internal Server Error", message: error.message });

//     }
//   }


export const empLogin = async (req, res, next) => {
  try {
    const { email, password, empId } = req.body;

    console.log("Login body:", req.body); 

    if ((email || empId) && password) {
      let isEmp;

      if (email) {
        isEmp = await Employee.findOne({ email });
      } else {
        isEmp = await Employee.findOne({ empId });
      }

      console.log("Is employee found:", isEmp); 

      if (isEmp) {
        console.log("Password match:", password === isEmp.password); 

        if (password === isEmp.password) {
          const token = generateToken({ id: isEmp._id ,role:"employee"});
          res.cookie("token", token, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
          });
          return res.status(200).send({ message: "Login successful" });
        } else {
          throw new Error("Password not matched");
        }
      } else {
        throw new Error("User details not found");
      }
    } else {
      throw new Error("Please provide all required fields");
    }
  } catch (error) {
    console.error("Login error:", error); // ✅ Better error logging
    return res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
};


export const getAuthStatus=async(req,res,next)=>{
  try{
    const { token } = req.cookies;
    const {id,role}=verifyToken(token)
    if(role=="admin"){
      //get admin data
      const adminDetails=await Admin.findById(id,{_id:0,password:0})
      return res.status(200).send(adminDetails)
    }else if(role=="employee"){
      //get the employee details
      const employeeDetails=await Employee.findById(id,{_id:0,password:0,__v:0})
      return res.status(200).send(employeeDetails)
    }

  }
  catch(error){
    next(error)
  }
}
export const logout=async(req,res,next)=>{
  try{
    res.clearCookie("token")
    res.status(200).send({message:"Logout Successful"})
  }
  catch(error){
    next(error)
  }
}