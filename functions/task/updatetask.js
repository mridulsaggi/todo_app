import { errorhandler } from "../../utils/errorhandler.js";
import { task } from "../../utils/schema.js";
import {errorkiclass} from "../../utils/errorhandler.js"
export const updatetask=async(req,res,next)=>{
    const {id}=req.params;
    const a=await task.findById(id)
    if(!a){
        return next(new errorkiclass("task not found",400))
    }
    a.cb=!a.cb
    await a.save() //saving the changes made to the task and await bcz it returns promise
    res.json({
        sucess:true,
        message:"task updated",
    })
}