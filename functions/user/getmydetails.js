import express from "express"
import jwt from "jsonwebtoken"
import { user } from "../../utils/schema.js";
import cp from "cookie-parser";
const app=express();
app.use(cp());
export const getmydetails=async(req,res)=>{
    const {name}=req.user
    console.log(name);
    res.json({
        sucess:true,
        message:"user found",
        user:req.user
    })
}