import express from  "express"
import { task } from "../../utils/schema.js"
export const mytasks=async (req,res)=>{
    
    const id=(req.user._id);
    const tasks=await task.find({user:id})
    res.json({
        sucess:true,
        message:"all tasks of the user are:",
        tasks
    })
}