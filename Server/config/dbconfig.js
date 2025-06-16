import mongoose from "mongoose";
import { config } from "dotenv";
config()
const mongourl=process.env.MONGO_URL || "mongodb://127.0.0.1:27017/assetmanagmentsystem"
async function connectDB() {
    try{
   await mongoose.connect(mongourl)
   console.log("db connected");
   
    }
    catch(error)
    {
        console.log(error.message);
        
    }
    
}
export default connectDB;