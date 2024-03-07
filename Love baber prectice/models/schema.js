import mongoose from "mongoose";

const todoSchema= new mongoose.Schema( {
    title:{
        type:String,
        required:true,
        maxLenth:50
    },
    discreption:{
        type:String,
        required:true,
        maxLength:50
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    }
})

export default mongoose.model("todo", todoSchema);