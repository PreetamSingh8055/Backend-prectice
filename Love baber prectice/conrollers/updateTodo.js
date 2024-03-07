import todoSchema from '../models/schema.js'


export const updateTodo=async(req,res)=>{
    try {
        const {id}= req.params;
        const {title, discreption}= req.body;
        const todo= await todoSchema.findByIdAndUpdate(
            {_id:id},
            {title, discreption,updatedAt: Date.now()},
            {new:true}
            );
        res.status(200).json({
            success:true,
            data:todo,
            message:"data update successfully !!"
        })
    } catch (error) {
        console.log(error);
    }
}