import express from 'express'
import { getPosts } from '../controllers/getPost.js'
import {createPost } from '../controllers/createPost.js'
import { findPost } from '../controllers/getOnePost.js';
import { deletePost } from '../controllers/deletePost.js';


const router=express.Router();

// router.get('/posts',getPosts);
router.get('/posts',getPosts,(req,res)=>{
 res.render('index.ejs')
})
router.get('/posts/new',(req,res)=>{
    res.render('new.ejs');
})
router.get('/posts/:id',findPost,(req,res)=>{
    res.render('show.ejs');
});
router.post('/posts',createPost)

router.delete('/posts/delete/:id',deletePost)

export default router;