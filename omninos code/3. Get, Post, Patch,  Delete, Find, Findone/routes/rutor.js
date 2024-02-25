import express from 'express'
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from '../controller/user.js';



const router = express.Router();


router.post('/create',createUser) // create a data one by one 
router.get('/all',getAllUser) // for getting all data 
router.get('/:id',getUserById)  // for getting a puticuler id
router.patch('/:id',updateUser) // update a puticuler data
router.delete('/:id',deleteUser) // delete a puticuler data


export default router;