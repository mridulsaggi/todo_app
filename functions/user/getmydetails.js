import express from "express"
import jwt from "jsonwebtoken"
import { user } from "../../utils/schema.js";
import cp from "cookie-parser";
import { isauth } from "../isauth.js";
const app=express();
app.use(cp());
export const getmydetails=async(req,res)=>{
    res.json({
        sucess:true,
        message:"user found",
        user:req.user
    })
}