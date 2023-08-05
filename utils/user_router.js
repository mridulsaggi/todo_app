import express from "express";
import { loginfunc } from "../functions/user/loginfunc.js";
import { logout } from "../functions/user/logout.js";
import {getmydetails} from "../functions/user/getmydetails.js"
import { register } from "../functions/user/register.js";
import { isauth } from "../functions/isauth.js";
const userrouter=express.Router();

// userrouter.get("/",(req,res)=>{
//     res.render("register.ejs");
// })
// userrouter.get("/new",(req,res)=>{
//     res.render("register.ejs");
// })
// userrouter.get("/login",(req,res)=>{
//     res.render("login.ejs");
// })
// userrouter.get("/register",(req,res)=>{
//     res.render("register.ejs");
// })

userrouter.get("/logout",logout)
userrouter.get("/user",isauth,getmydetails)
userrouter.post("/login",loginfunc)
userrouter.post("/register",register)
userrouter.post("/todo",(req,res)=>{
    const {task,desc,choice}=req.body;
})

export default userrouter;