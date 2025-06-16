import express from "express";
import { addAsset, deleteAsset, getAllAssets, updateAsset } from "../controller/assetcontroller.js";
import { adminVerify } from "../middleware/adminVerify.js";

const assetRouter = express.Router();
//get all assets
assetRouter.get("/all",adminVerify, getAllAssets)

//add assets
assetRouter.post("/add",adminVerify,addAsset);

//update asset
assetRouter.put("/update", adminVerify, updateAsset)  //http://localhost:8000/api/asset/update?id=12345

//delete asset
assetRouter.delete("/delete", adminVerify, deleteAsset)  //http://localhost:8000/api/asset/delete?id=12345


export default assetRouter;
