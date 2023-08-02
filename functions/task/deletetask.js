import { task } from "../../utils/schema.js";
import {errorkiclass} from "../../utils/errorhandler.js"
export const deletetask=async(req,res,next)=>{
    const {id}=req.params;
    const a=await task.findById(id)
    console.log(a);
    if(!a){
        return next(new errorkiclass("task not found",400))
        }
    else{

       const ab= await task.deleteOne({_id:id});
       console.log(ab)
        res.json({
            sucess:true,
            message:"task deleted",
        })
    }
}