import Post from '../models/Schema.js'

export const deletePost=async(req,res)=>{
    try {
        const {id}= req.params;
        const user= await Post.deleteOne(id);

        if(!user)
        {
            res.status(500).send("wrong credentials");
        }
        res.status(200).redirect("/posts");
    } catch (error) {
        console.log(error);
    }
}