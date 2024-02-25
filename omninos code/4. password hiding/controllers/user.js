import User from "../model/user.js"
import bcrypt from "bcryptjs"

// create user
export const createUser=async(req,res)=>{
    try
    {
      const {username,email,password}= req.body;
      
      if(!username ||  !email || !password)
      {
        return res.json({message:"fill all required fields"});
      }

    //   const result = validationResult(req);
    //   const hasErrors = !result.isEmpty();
    //   if(hasErrors){
    //     return res.json({ errors: result.array() });
    //   }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const newUser= await User.create({
        username,
        email,
        password:hash
      })
      res.status(200).json(newUser);
    }
     catch (error)
    {
        console.log(error)
    }
}


// check user
// export const checkUser=async(req,res)=>{
//     try
//     {
    //   const {email,password}= req.body;
      
//       const user = await User.findOne({email:req.body.email});
//       if(!user){
//         res.send("invalid credentails");
//       }

  
//       if(user && (await bcrypt.compare(req.body.password,user.password)))
//       {
//         res.status(200).json(user)
//       }
//     }
//      catch (error)
//     {
//         console.log(error)
//     }
// }



// get the all user

export const getAllUser = async(req,res)=>{
    try
    {
      const user = await User.find({});  

      res.status(200).json(user);
    } catch (error) 
    {
        console.log(error);
    }
}

// find user by id

export const findById = async(req,res)=>{
    try 
    {
        const {id}=req.params;
        const user= await User.findById(id);

        if(!user)
        {
            res.json({message:"invalid credentials"});
        }
        res.status(200).json(user);
    } catch (error)
     {
    console.log(error)    
    }
}

// update user by id 
export const updateUser= async(req, res)=>{
    try {
        const {id}=req.params;
        const user= await User.findById(id);

        if(!user)
        {
            res.json({message:'invalid credentials'});
        }
        const newUser= await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
        
    }
}

//delete user by id 
export const deleteUser=async(req,res)=>{
    try {
        const {id}=req.params;
        const user= await User.findById(id);

        if(!user)
        {
           res.json({message:"invalid credentials"}); 
        }

        await User.deleteOne(user);
        res.status(200).json(id);
    } catch (error) {
        console.log(error);
    }
}