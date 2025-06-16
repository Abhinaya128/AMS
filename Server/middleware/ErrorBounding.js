const errorhandler=(error,req,res,next)=>{
    //console.log(error.message);
    const statusCode=500
if(error.message=="password not matched"){
        statusCode=401
}else if(error.message=="user details not found"){
statusCode=400
}else if(error.message=="provide all fields"){
statusCode=400
}
return res.status(statusCode).send({error:error.message})
}
export default errorhandler;