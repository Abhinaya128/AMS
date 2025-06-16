import express from "express"
import { assignedAssets, returnAssignedAsset } from "../controller/admincontroller.js"


const adminRouter=express.Router()
//assign assets
adminRouter.post("/assign/asset",assignedAssets)

//update assigned asset
//adminRouter.get("update/assets",updateAssignedAsset)

adminRouter.post("/return/asset",returnAssignedAsset)
export default adminRouter