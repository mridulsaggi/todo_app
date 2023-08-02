import mongoose, { connect } from "mongoose";
const connection= ()=> {
    
    mongoose.connect("mongodb+srv://nodejstodo:nodejstodo@cluster0.vtkziqm.mongodb.net/?retryWrites=true", { dbName: "todo" }).then(()=>{
        console.log("db connected")
    }).catch((e)=>{
        console.log("db not connected");
    })
}
export default connection;