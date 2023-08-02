import express from "express"
import path from "path"
import connection from "./utils/connection.js"
import userrouter from "./utils/user_router.js"
import taskrouter from "./utils/task_router.js"
import {config} from "dotenv";
import cors from "cors"
import cp from "cookie-parser"
import { errorhandler } from "./utils/errorhandler.js";
config({path:"./config.env"})
const app=express();
app.use(cp());
app.use(cors({
    origin:[process.env.frontendurl],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true,//to make cookie accessible on frontend also bcz this allows cokkie accessible on diff domains.
})
)
app.use(express.static(path.join(path.resolve(),"public")))

app.use(express.urlencoded({extended:true}))

app.use(express.json()) //this should be written before using routes so that it gets used in all routes

//using router
app.use(userrouter); 
app.use(taskrouter)

connection(); //setting connection

app.listen(3000,()=>{
    console.log("server running");
})

app.use(errorhandler); //error handling middleware