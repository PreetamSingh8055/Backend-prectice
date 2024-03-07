import Post from '../models/Schema.js'

export const getPosts= async(req,res)=>{
    try {
        const posts= await Post.find({});
        res.status(200).render('index.ejs',{posts});
    } catch (error) {
        console.log(error);
    }
}