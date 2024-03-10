import express from 'express'
import { signUp , login} from '../controllers/Auth.js';
import { auth, isStudent, isAdmin } from '../middlewares/auth.js';

const router=express.Router();

router.post("/signup",signUp);
router.post("/login",login);

//testing protected routes for single middleware
router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route fot TESTS",
    });
})

//Protected Route
router.get("/student", auth, isStudent, (req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route for Students",    
    })
})

router.get("/admin", auth, isAdmin, (req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route for Admin",    
    })
})

export default router;