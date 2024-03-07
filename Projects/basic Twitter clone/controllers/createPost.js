import Post from '../models/Schema.js'

export const createPost=async(req,res)=>{
    try {
        const {username, content}=req.body;

        await Post.create({username,content});
        res.status(200).redirect('/posts');
    } catch (error) {
        console.log({
            success:false,
            message:"this not create for internal error bro",
            data:error
        });
    }
}