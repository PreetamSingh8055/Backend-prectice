import todoSchema from '../models/schema.js'

export const getTodo= async (req,res)=>{
  try {
    const todo= await todoSchema.find({});

    res.status(200).json({
        sucess:true,
        data:todo
    })
    
  } catch (error) {
    console.error(error);
    res.status(200).json({
        sucess:false,
        message:error
    })
  }
}

export const getByID= async(req,res)=>{
try {
      const {id}= req.params;
     const todo= await todoSchema.findById(id);
     if(!todo)
     {
        res.status(500).json({message:"invalid credentials"});
     }
     res.status(200).json({todo});
} catch (error) {
    console.log(error);
}
}