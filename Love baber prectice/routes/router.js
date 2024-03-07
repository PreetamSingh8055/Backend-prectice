import express from "express"
import { createTodo } from "../conrollers/createTodo.js";
import { getTodo , getByID} from "../conrollers/getTodo.js";
import { deleteTodo } from "../conrollers/deleteTodo.js";
import { updateTodo } from "../conrollers/updateTodo.js";


const router=express.Router();

router.post('/create',createTodo);
router.get('/all',getTodo);
router.get('/:id',getByID);
router.delete('/:id',deleteTodo);
router.put('/:id',updateTodo);

export default router;