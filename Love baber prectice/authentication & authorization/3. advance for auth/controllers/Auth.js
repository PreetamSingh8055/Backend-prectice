import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
// login
export const login=async(req,res)=>{
    try {
        //data fetch
        const {email,password}=req.body;
        //validation on email and password    that fill the fields or not
        if(!email ||  !password)
        {
            return res.status(400).json({
                success:false,
                message:'Please fill all the details carefully',
            });
        }
        //check for registered user
        // const user=await User.findOne({email});
        let user=await User.findOne({email});

        //if not a registered user
        if(!user){
            return res.status(401).json({
                success:false,
                message:'User is not registered',
            });
        }
        const payload={
            email:user.email,
            id:user._id,
            role:user.role,
        }
        //verify password & generate a JWT token
        if(await bcrypt.compare(password,user.password)){
            //password match
            let token= jwt.sign(payload,
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:"2h",
                                });
            // console.log(user);
            user=user.toObject();
            user.token=token;
            // console.log(user);
            user.password=undefined;
            // console.log(user);
            const options={
                expires:new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
            }
            res.cookie("babbarCookie",token, options).status(200).json({
                success:true,
                token,
                user,
                message:'User Logged in successfully',
            });
        }
        else
        {
            //password do not match
            return res.status(403).json({
                success:false,
                message:"password incorrect",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Login failed, please try again later.',
   
        });
    }
}