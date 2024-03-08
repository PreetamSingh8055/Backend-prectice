import Post from '../models/postModel.js';
import Comment from '../models/commentModel.js';


export const createComment= async (req,res)=>{
    try {
        const {post, user, body}=req.body;

        const comment= new Comment({
           post,user,body
        });

        const savedComment= await comment.save();

        const updatedPost= await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new:true})
            .populate('comments')
            .exec();

        res.json({
            post: updatedPost,
        });

    } catch (error) {
        return res.status(500).json({
            error:'Error while Creating comment',
        });
    }
}