import cp from "cookie-parser";
import express from "express";
const app=express();
app.use(cp());
export const logout=(req,res)=>{
    res.cookie("token",null,{
        httpOnly:true,
        expires:new Date(Date.now()),
        sameSite:"none",
        secure:true,
    })
    res.json({message:"loged out"})
}