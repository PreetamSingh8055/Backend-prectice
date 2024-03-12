import Post from '../models/Schema.js'

export const deletePost=async(req,res)=>{
    try {
        const {id}= req.params;
        const post = await Post.findById(id);
       console.log(post)
         await post.deleteOne();

        // res.status(200).redirect("/posts");
        res.send({message:"delted sucelfjdlksf"})
    } catch (error) {
        console.log(error);
    }
}