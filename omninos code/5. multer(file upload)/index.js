import express from 'express'
import dotenv from  'dotenv'
import multer from 'multer'

dotenv.config();
const app=express();
// const upload=multer({dest:'uploads/'});
const storage=multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'uploads/');
    },
    filename: function (req, file, cb)
    {
        const unique=Date.now();
        cb(null,unique + file.originalname);
    }
})
const upload=multer({storage:storage});

app.post("/create",upload.single('avatar'),(req,res)=>{
    console.log(req.file);
    res.send("file upload");
})
app.get("/",(req,res)=>{
    res.send("this is get response");
})

const port=  3000 || process.env.PORT;
app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})
