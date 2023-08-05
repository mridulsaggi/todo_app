import jwt from "jsonwebtoken";
import cp from "cookie-parser";
import express from "express";
const app=express();
app.use(cp());
import { user } from "../utils/schema.js";
import { errorkiclass } from "../utils/errorhandler.js";
export const isauth = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const decodedid = jwt.verify(token, process.env.secretkey)
        req.user = await user.findById(decodedid);
        next();
    }
    else{
        return next(new errorkiclass("please login first",404))
    }
}