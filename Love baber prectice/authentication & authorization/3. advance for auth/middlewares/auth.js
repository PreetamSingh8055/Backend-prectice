// auth, isStudent, isAdmin

import jwt from 'jsonwebtoken'

export const auth=(req,res,next)=>{
    try {
        //extract JWT token
        //PENDING :other ways to fetch token
        const token=req.body.token;

        if(!token)
        {
            return res.status(401).json({
                success:false,
                message:"Token Missing",
            })
        }
        
        //verfiy the token
        try {
            const decode=jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            // why this ?
            req.user=decode;
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"token is invalid",
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Something went wrong, While verifying the token",
        });
    }
}

export const isStudent=(req,res,next)=>{
    try {
        if(req.user.role !== "Student")
        {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for students",
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User Rolde is not matching",
        })
    }
}

export const isAdmin=(req,res,next)=>{
    try {
        if(req.user.role !== "Admin")
        {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for admin",
            });
        }
        next();
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"User Role is not matching",

        })
    }
}