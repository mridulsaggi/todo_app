import { task } from "../../utils/schema.js";
import mongoose from "mongoose";
export const newtask =async(req,res)=>{
    console.log(req.user._id);

    const {title,desc}=req.body;
    // console.log(req.body)
    const a=await task.create({
        title,desc,user:req.user._id
    })
    res.json({
        message:"task added"
    })
}