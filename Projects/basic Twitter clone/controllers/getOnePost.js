import Post from '../models/Schema.js'

export const findPost= async(req,res)=>{
    try {

        const {id}= req.params;

        const post= await Post.findById(id);

        if(!post)
        {
            res.status(500).send("wrong credentials");
        }
        // console.log(post);
        res.status(200).render("show.ejs",{post});
        
    } catch (error) {
        console.log(error);
    }
}