import mongoose from "mongoose";
import { user } from "../../utils/schema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express from "express";
import {config} from "dotenv";
import cp from "cookie-parser";
import { errorkiclass } from "../../utils/errorhandler.js";
const app=express();
config({path:"../config.env"})
app.use(cp());
app.use(express.urlencoded({extended:true}))
export const register=async(req,res,next)=>{
    const {name,email,password}=req.body;
    const ab=await user.findOne({email});
    if(!ab){
    const hashedpass=await bcrypt.hash(password,10)
    const a=await user.create({
        name,email,password:hashedpass
    })
    const codedid=jwt.sign({_id:a._id},process.env.secretkey);
    res.cookie("token",codedid,{
        httpOnly:true,
        expires:new Date(Date.now()+20*1000*60),
        sameSite:"none",
        secure:true,
    }).json({
        sucess:true,
        message:"user reg successfully:)"
    })
    } 
    else{
        return next(new errorkiclass("user already exists",404))
    }
}