import Asset from "../models/assets.js"; 

//import assetRouter from "../Routes/assetRoute.js"

export const addAsset= async(req,res,next)=>{
    try{
        const assetDetails=new Asset(req.body)
        await assetDetails.save()
        res.status(201).send({message:"Asset Added"})

    }
    catch(error){
    next(error)  //calls the error handeling middleware 
    }
} 

export const getAllAssets = async (req, res, next) => {
    try {
        const assets = await Asset.find();
        res.status(200).send(assets);
    } catch (error) {
        next(error);
    }
};



// Update asset
export const updateAsset = async (req, res, next) => {
    try {
        const { id } = req.query
         await Asset.updateOne({_id:id},{...req.body})
        res.status(200).send({ message: "Asset details updated"});
    } catch (error) {
        next(error);
    }
};

// Delete asset
export const deleteAsset = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Asset.deleteOne({_id:id})
        res.status(200).send({ message: "Asset deleted" });
    } catch (error) {
        next(error);
    }
};