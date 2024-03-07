import mongoose from "mongoose";

const Post= new mongoose.Schema({
    username:{
        type:String,
        requried:true,
        maxlength:20,
    },
    content:{
        type:String,
        required:true,
        maxLength:50,
    }
})
export default mongoose.model('post',Post);