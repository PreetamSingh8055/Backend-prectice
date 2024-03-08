import User from "../models/user.js";
import bcrypt from 'bcryptjs'

export const signUp=async(req,res)=>{
    try {
        const {name,email,password,role}= req.body;

        const existingUser= await User.findOne({email});

        if(existingUser)
        {
            return res.status(400).json({
                sucess:false,
                message:"user already Exists",
            })
        }
        let hashPassword;
        try {
             hashPassword= await bcrypt.hash(password,10);
        } catch (error) {
            return res.status(500).json({
                sucess:false,
                message:"Error in hasing password"
            });
        }


        //create entry for User
        const user= await User.create({
            name,email, password:hashPassword, role
        })

        return res.status(200).json({
            sucess:true,
            message:'User created Sucessfully',
        })
    } catch (error) {
       console.error(error)
       return res.status(500).json({
          sucess:false,
          message:'User cannot be registered, please try again later',
       })
    }
}