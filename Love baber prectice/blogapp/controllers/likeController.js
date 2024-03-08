import Post from '../models/postModel.js'
import Like from '../models/likeModel.js'

// like a post
export const likePost= async(req,res)=>{
    try {
        const {post, user}=req.body;
        const like=new Like({
            post, user,
        });
        
        const savedLike= await like.save();

        const updatedPost= await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new:true})
        .populate("likes").exec();
        
        res.json({
            post:updatedPost,
        });
    } catch (error) {
        return res.status(400).json({
            error:"Error while Liking post", 
        });
    }
}

// Unlike a post

export const unlikePost= async(req,res)=>{
    try {
        const {post,like}=req.body;

        const deletedLike= await Like.findByIdAndDelete({post:post, _id:like});
        const updatedPost= await Post.findByIdAndUpdate(
             post,
            {$pull: {likes: deletedLike._id} },
            {new:true}
            );

            res.json({
                post:updatedPost,
            });
    } catch (error) {
        return res.status(400).json({
            error:"Erron while Unliking post",
        });
    }
}

export const dummyPost=(req,res)=>{
    res.send("this is your dummy page");
}