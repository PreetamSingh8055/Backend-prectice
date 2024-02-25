import express from "express";
import {createUser, getAllUser, findById, updateUser, deleteUser} from "../controllers/user.js";

const router=express.Router();


router.post("/create", createUser);
// router.post('/create',[check("email","Enter your email",check('username',"Enter your username"))],createUser)
// router.get('/check',checkUser);
router.get("/all",getAllUser);
router.get("/:id",findById);
router.patch("/:id",updateUser);
router.delete("/:id",deleteUser);


export default router;