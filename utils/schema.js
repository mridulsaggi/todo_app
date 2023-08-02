import mongoose, { mongo } from "mongoose"

const usereschema = mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
export const user = new mongoose.model("user", usereschema)

const taskschema = mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    desc: {
        type: String,
        required: true
    },

    cb: {
        default:false,
        type: Boolean,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: user //ref name same azs that of model collection
    }
})
export const task = new mongoose.model("task", taskschema);
