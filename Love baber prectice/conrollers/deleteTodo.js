import todoSchema from '../models/schema.js'

export const deleteTodo=async(req,res)=>{
    try {
        const {id}= req.params;
        await todoSchema.findByIdAndDelete(id);
        res.status(200).json({
            sucess:true,
            data:id,
            message:"deleted sucessfully",
        })
    } catch (error) {
        console.log(error);
    }
}