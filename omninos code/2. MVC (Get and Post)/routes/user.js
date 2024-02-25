import express from 'express'
import { createUser, getUser } from '../controllers/user.js';

const router = express.Router();


router.post("/create",createUser)
router.get("/",getUser)


export default router