import * as auth from "#src/services/authServices.js"
import {asyncHandler} from "#src/handler/asyncHandler.js"
export const register=asyncHandler(async(req,res,next)=>{
  const {name,email,password,role_id}=req.body
  
  if(!name|!email|!password|!role_id){
    const error =new Error("You must fill in all required fields.")
    error.code=400;
    throw error;
  }

  await auth.register(req);

  return res.json({
    success:true,
    message:"user created successfully",
  });
});

