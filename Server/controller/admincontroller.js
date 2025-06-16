import Asset from "../models/assets.js";
import AssignedAssets from "../models/assignedassets.js";
import Employee from "../models/employee.js";

export const assignedAssets=async (req,res,next)=>{
    try{
          let {assetTag,empId,assignedAt}=req.body
          let isAssetAvailable=await Asset.findOne({assetTag})
          if(isAssetAvailable?.status=="available")
          {
            let isEmployee=await Employee.findOne({empId})
            if(isEmployee){
            //store the assetid and empid and the assignedAt
            const assignedAssetDetails=new AssignedAssets({
              assetId:isAssetAvailable._id,
              employeeId:isEmployee._id,
              assignedAt
            })
            await assignedAssetDetails.save()
            //modify the status of asset
            isAssetAvailable.status="assigned"
            await isAssetAvailable.save()
            res.status(200).send({message:"asset assigned succesfully"})
            }else{
                throw new Error("invalid employee id")
            }
          }else{
            throw new Error("Invalid asset details")
          }
          
    }
    catch(error){
 next(error);
    }
}
export const returnAssignedAsset=async (req,res,next)=>{
    try{
        const {assetTag,returnedAt,returnedCondition,note}=req.body

        //check the asset
        const isAsset=await Asset.findOne({assetTag})
        if(isAsset?.status=="assigned"){
          // modify the assigned assets
        await AssignedAssets.updateOne({assetId:isAsset._id,returnedAt:null},{
          $set:{returnedAt,returnedCondition,note}
        })
        //modify the status is available
        isAsset.status="available"
        await isAsset.save();
        return res.status(200).send({message:"asset returned successfully"})
      } else{
          throw new Error("invalid asset details")
        }
    }
    catch(error){
 next(error);
    }
}