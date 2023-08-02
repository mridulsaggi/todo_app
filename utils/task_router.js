import express from "express";
import { isauth } from "../functions/isuth.js";
import {newtask} from "../functions/task/newtask.js"
import {mytasks} from "../functions/task/mytasks.js"
import { updatetask } from "../functions/task/updatetask.js";
import { deletetask } from "../functions/task/deletetask.js";
const taskrouter=express.Router();
taskrouter.post("/new",isauth,newtask)
taskrouter.get("/mytasks",isauth,mytasks)
taskrouter.route("/:id").put(isauth,updatetask).delete(isauth,deletetask)
export default taskrouter;