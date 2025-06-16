import mongoose from "mongoose"

const assetSchema=new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    SrlNo:{type:Number,required:true,unique:true},
    model:{type:String},
    imageURL:{type:String},
    assetTag:{type:String,required:true,unique:true},
    status:{type:String,enum:["available","assigned","damaged"]},
    purchasedDate:{type:Date},
    warrantyExpiringDate:{type:Date}

},{timestamps:true})


const Asset=mongoose.model("Assets",assetSchema)

export default Asset