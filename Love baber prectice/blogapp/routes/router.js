import express from 'express'
const router=express.Router();

//import Controllers
import { dummyPost, likePost, unlikePost } from '../controllers/likeController.js';
import { createComment } from '../controllers/commentController.js';
import { createPost, getAllPosts } from '../controllers/postController.js';


router.get('/dummyroute',dummyPost);
router.post('/comments/create',createComment);
router.post('/posts/create',createPost);
router.get('/posts',getAllPosts);
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);

export default router;