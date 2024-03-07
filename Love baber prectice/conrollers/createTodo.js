import todoSchema from '../models/schema.js'



export const createTodo=async(req,res)=>{
    try {
        // this is a method one
        // const newTodo= new todoSchema(req.body);
        // await newTodo.save();

        // this is method two    // babar bhaiya method

        const {title, discreption}= req.body;

        const response = await todoSchema.create({title,discreption});
        if(!response)
        {
            res.status(500).json({message:"not creating data bhai"});
        }


        res.status(200).json({
            sucess:true,
            data:response,
            message:"data saved in the database",
        });
      
    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess:false,
            data:"internal server error",
            message:error.message
        })
    }
}