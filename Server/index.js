import express from "express"
import {config} from "dotenv"
config()
import connectDB from "./config/dbconfig.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"
import adminRouter from "./Routes/adminroute.js"
import assetRouter from "./Routes/assetRoute.js"
import employeeRouter from "./Routes/employeeRoute.js"
import authRouter from "./Routes/authRouter.js"
const app=express()
//middlewares
app.use(express.json())//json parser
app.use(express.urlencoded({extended:true})) //url data parser
app.use(cookieParser())//cookie parser data
app.use (cors(
  {
 origin: "http://localhost:5173", 
  credentials: true,  
  }
))  
app.use(morgan("dev"))//http logger

//demo route
app.get("/",(req,res)=>res.send({message:"server is working"}))

//routes
app.use("/api/admin",adminRouter)
app.use("/api/asset",assetRouter)
app.use("/api/employee",employeeRouter)
app.use("/api/auth",authRouter)

//error
// app.use(errorHandler)

//connect DB
connectDB()

const port = Number(process.env.SERVER_PORT) || 8000;
app.listen(port,()=>{
    console.log("server running in "+ port);
    
})