import mongoose from "mongoose";
import { user } from "../../utils/schema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express from "express";
import { config } from "dotenv";
import cp from "cookie-parser";
import { errorkiclass } from "../../utils/errorhandler.js";
// import { Errorkiclass } from "../../utils/errorhandler.js";
config({ path: "../congfig.env" })
const app = express();
app.use(cp());
app.use(express.urlencoded({ extended: true }))
export const loginfunc = async (req, res) => {
    const { email, password } = req.body;
    const b = await user.findOne({ email });
    if (!b) {
        return next(new errorkiclass("please register first", 404))  //rather than calling new Error we called out own class
    }
    const match = await bcrypt.compare(password, b.password);
    if (match) {
        const codedid = jwt.sign({ _id: b._id }, process.env.secretkey);
        res.cookie("token", codedid, {
            httpOnly: true,
            expires: new Date(Date.now() + 20 * 1000 * 60),
            sameSite: "none",
            secure: true,
        }).json({
            sucess: true,
            message: "logedin"
        })
    }

}